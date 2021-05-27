const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node api folder structure.",
      version: "1.0.0",
      description: "Node and Express api folder structure for a larger and scalable application.",
    },
    servers: [
      {
        url: "http://localhost:8888",
      }
    ],
  },
  apis: ["../../api/routes"],
}

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpecs;