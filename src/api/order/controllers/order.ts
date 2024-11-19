"use strict";
const stripe = require('stripe')(process.env.STRIPE_KEY);

/**
 * order controller
 */

import { factories } from '@strapi/strapi'

module.exports = factories.createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {

        const { products } = ctx.request.body;


        try {

            const lineItems = await Promise.all(

                products.map(async (product) => {
                    const item = await strapi.service("api::product.product").findOne(product.id);
                    console.log(item);

                    return {
                        price_data: {
                            currency: "ARS",
                            product_data: {
                                name: product.productName
                            },
                            unit_amount: Math.round(product.price * 100),
                        },
                        quantity: 1
                    }
                })
            )
            const session = await stripe.checkout.sessions.create({
                shipping_address_collection: {
                    allowed_countries: ["AR"],
                },
                payment_method_types: ["card"],
                mode: "payment",
                success_url: process.env.CLIENT_URL + "/success",
                cancel_url: process.env.CLIENT_URL + "/error",
                line_items: lineItems,
            })

            await strapi.service("api::order.order").create({ data: { products, stripeID: session.id } });

            return { stripeSession: session };
        } catch (error) {
            console.error('Error creating order:', error);
            ctx.response.status = 500;
            ctx.response.body = { error: error.message || 'Internal Server Error' };

        }
    }
}));