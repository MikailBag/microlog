'use strict';

module.exports = function (module, logInits, format) {
  var Logger = require('./lib/logger');
  return new Logger(module, logInits, format);
};