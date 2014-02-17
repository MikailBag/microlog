module.exports = {
  dependent: null,
  map: {
    type: ':type',
    module: this.dependent && this.dependent.filename.split('/').slice(-2).join('/')
  },
  format: {
    message: ':type: [:module] :message',
    initModule: '!'
  },
  initMessage: '',
  log: console.log,
  error: console.error,
  debug: console.debug
};