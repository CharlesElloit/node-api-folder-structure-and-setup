/**
 * This is where you'll export all the files that contain
 * the routes functions or business logics within this folder
 * for easy access. eg, in the routes/index file you will do
 * something like this require('exampleController') and have
 * access to the routes functions or the business logic, instead
 * of exporting each of them spread.
 */

const example = require('./example');

module.exports = {
  example,
};

// another way to export

/**
 * module.exports = {
 *  example: require('./example'),
 * }
 *
 * But you will need to disable global-require from .eslintrc.js file.
 */
