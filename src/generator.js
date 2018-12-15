const shortid = require('shortid');

const CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@';

shortid.characters(CHARACTERS);

module.exports = () => shortid.generate().toUpperCase();