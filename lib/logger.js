'use strict';

var Logger = module.exports = function (module, format, logInits) {
  this.module = module && module.filename.split('/').slice(-2).join('/');
  this.message = format || ':type: [:module] :message';
  this.logInits = logInits || true;

};


Logger.prototype.log = exports.log = function() {

  this.message
    .replace(':type', 'log')
    .replace(':module', this.module || '')
    .replace(':message', ''); // fake. Not implemented

  console.log.apply(null, arguments);

};


Logger.prototype.error = exports.error = function() {

  this.message
    .replace(':type', 'error'.red)
    .replace(':module', this.module || '')
    .replace(':message', ''); // fake. Not implemented

  console.error.apply(null, arguments);

};


Logger.prototype.debug = exports.debug = function() {

  this.message
    .replace(':type', 'error')
    .replace(':module', this.module || '')
    .replace(':message', ''); // fake. Not implemented

  console.debug.apply(null, arguments);

};