const { getHash, writeToFile } = require("./utils");
const { digestModes } = require("./consts");
const { passwordTable, hashes } = require("./data");

const mode = digestModes.HEX;

// for (data of passwordTable) {
//   const obj = {
//     data,
//     mode,
//     hashes: {},
//   };
//   for (algorithm of hashes) {
//     const hash = getHash(algorithm, data, mode);
//     obj.hashes[algorithm] = hash;
//   }
//   console.log(obj);
// }

// console.log(
//   `Checked ${passwordTable.length} common passwords using ${hashes.length} hashing algorithms`
// );

writeToFile("this is salted", "salt");
writeToFile("this is not");
