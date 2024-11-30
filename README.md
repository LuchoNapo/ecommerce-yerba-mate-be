## 🛍️ E-commerce Yerba Mate - Backend
This project is the backend for an e-commerce platform selling Yerba Mate products, built with `TypeScript` and `Strapi`. It handles business logic, data persistence, and integrates with external services like `Stripe` for payment processing, `Cloudinary` for image storage, and `PostgreSQL` for the database. The backend is deployed on  `Render`, with the database managed by `Railway`.

### 🛠️ Project Technologies
[<img alt="Static Badge" src="https://img.shields.io/badge/Next-black">](https://nextjs.org/) 
[<img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-%233178C6">](https://www.typescriptlang.org) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Strapi-4945FF">](https://strapi.io/) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Render-white">](https://render.com/) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Vercel-grey">](https://vercel.com/) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Stripe-635BFF">](https://strapi.io/](https://stripe.com/es-us)) 
[<img alt="Static Badge" src="https://img.shields.io/badge/Railway-9E06B5">](https://vercel.com/) 

### 🔧 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LuchoNapo/ecommerce-yerba-mate-be.git
   cd ecommerce-yerba-mate-be
2. Install dependencies:
   ```bash
   npm install
3. Configure environment variables with your own credentials: Create a .env file in the root directory and add the required variables _(take a look to env.example)_:
   ```bash
   DATABASE_URL=your-database-url
   STRIPE_SECRET_KEY=your-stripe-secret-key
   CLOUDINARY_URL=your-cloudinary-url
   PORT=1337
4. Start the development server:
   ```bash
   npm run develop
The application will be available at `http://localhost:1337`.

### 📂 Project Structure

```
ecommerce-yerba-mate-be/
├── .strapi/              # Strapi-specific configuration and data files
├── config/               # Strapi configuration files (routes, services, etc.)
├── database/             # Database migrations, schema definitions, and seed data
├── public/               # Public static files (images, assets, etc.)
├── src/                  # Source code for business logic and controllers
│   ├── api/              # API logic for different entities (e.g., products, categories)
│   │   ├── category/     # Category API logic
│   │   │   ├── controllers/  # Category-related controllers
│   │   │   ├── content-types/  # Category content-type definitions
│   │   │   ├── services/     # Category-specific business logic
│   │   ├── product/      # Product API logic
│   │   │   ├── controllers/  # Product-related controllers
│   │   │   ├── content-types/  # Product content-type definitions
│   │   │   ├── services/     # Product-specific business logic
│   │   ├── order/        # Order API logic
│   │   │   ├── controllers/  # Order-related controllers
│   │   │   ├── content-types/  # Order content-type definitions
│   │   │   ├── services/     # Order-specific business logic
├── .env                  # Environment variables (DB and API keys)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation

```
### 🚀 Deployment
The project is deployed on [Vercel](https://vercel.com). You can see it in operation [here](https://ecommerce-yerba-mate.vercel.app/).
> [!IMPORTANT]
> Backend Startup Delay: The backend is hosted on a free-tier plan, which may result in delayed responses when starting the server. Please allow a few moments for the data to load when accessing the frontend.
>
### 👤 Author <br>
Luciano Andrés Napolitano <br>
Web Developer passionate about creating modern web experiences. <br>
[GitHub](https://github.com/LuchoNapo) | [LinkedIn](https://www.linkedin.com/in/luciano-napolitano/)
