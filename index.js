var Logger = module.exports = require('./lib/logger');

var logger = new Logger(module, true);
logger.log('some logs');
logger.info('some infos');
logger.error('some errors');
logger.warn('some warns');