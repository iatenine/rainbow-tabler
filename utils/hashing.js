const shajs = require("sha.js");

const getHash = (algorithm, data, mode) =>
  shajs(algorithm).update(data).digest(mode);

module.exports = { getHash };
