/* eslint-disable import/no-extraneous-dependencies */
// optional: will be called once before all tests are executed
const setTZ = require('set-tz');

module.exports = () => {
  setTZ('UTC');
};
