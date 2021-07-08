const express = require('express');

const app = express();
const cors = require('cors');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDOC = require('swagger-jsdoc');
require('dotenv').config();

const { logger } = require('./middlewares');
// Error handlers
const errorHandler = require('./handlers/errorHandler');
// Routes
const routes = require('./routes');
const options = require('../docs/swagger/swagger-options');

// Middlewares
app.use(cors());
app.use(logger);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/', routes);

// swagger docs config
const swaggerSpecs = swaggerJSDOC(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

// Not found error handler
app.use(errorHandler.notFoundErrorHandler);

// handler for production errors
if (process.env.NODE_ENV === 'production') {
  app.use(errorHandler.productionErrorsHandler);
}

// lets handle the development error
app.use(errorHandler.developmentErrorsHandler);

// exporting the app
module.exports = app;
