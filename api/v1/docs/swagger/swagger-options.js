const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'Dailytasks API',
      version: '1.0.0',
    },
    servers: [
      { url: `http://localhost:${process.env.PORT || 4000}` },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./api/v1/src/**/*.js'],
};

module.exports = options;
