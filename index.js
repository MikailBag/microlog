var Logger = module.exports = require('./lib/logger');

var logger = new Logger(module, true);
var x = logger.log('some logs');
console.log(x);
// logger.info('some infos');
// logger.error('some errors');
// logger.warn('some warns');