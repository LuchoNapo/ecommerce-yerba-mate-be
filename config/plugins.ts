export default ({ env }: { env: (key: string) => string }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dwuaomsru'),
          api_key: env('539877535361312'),
          api_secret: env('Ayu3djUMOF3wyxKsPg1yfhlOh7g'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
  