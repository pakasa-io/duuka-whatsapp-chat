require('dotenv').config();
const config = require('config');
const { NAMESPACE } = require('../../../constants');

const getConfig = (key, def) => {
  path = `${NAMESPACE}.${key}`;
  return config.has(path) ? config.get(path) : def;
};

module.exports = {
  Query: {
    pakasaWhatsAppButton: () => ({
      phoneNumber: getConfig('phoneNumber', '+256700123456'),
      message: getConfig('message', 'Hello I\'m interested in your services'),
      buttonText: getConfig('buttonText', 'Chat'),
      className: getConfig('className', '')
    })
  }
};
