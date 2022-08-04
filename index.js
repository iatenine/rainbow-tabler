const { getHash } = require("./utils/hashing");
const { digestModes } = require("./consts/index");
const { passwordTable, hashes } = require("./data");

const mode = digestModes.HEX;

for (data of passwordTable) {
  const obj = {
    data,
    mode,
    hashes: {},
  };
  for (algorithm of hashes) {
    const hash = getHash(algorithm, data, mode);
    obj.hashes[algorithm] = hash;
  }
  console.log(obj);
}
