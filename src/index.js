/**
 * This is the entry file for the 
 * application. You can rename it if you wish
 * but make sure to change it in the package.json as well.
 */
const express = require("express");
const app = express();
const cors = require("cors")
const helmet = require("helmet");
require("dotenv").config();

const { logger } = require("./api/middlewares");
// Error handlers
const errorHandler = require("./api/handlers/errorHandler")
// Routes
const routes = require("./api/routes");

// Middlewares
app.use(cors());
app.use(logger);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use(routes);

// Not found error handler
app.use(errorHandler.notFoundErrorHandler);

// handler for production errors
if (process.env.NODE_ENV === "production") {
  app.use(errorHandler.productionErrorsHandler);
}

// lets handle the development error
app.use(errorHandler.developmentErrorsHandler);

// Listener
const PORT = process.env.PORT || 7777
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
