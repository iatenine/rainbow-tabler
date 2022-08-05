const { getHash, writeToFile } = require("./utils");
const { digestModes } = require("./consts");
const { passwordTable, hashes } = require("./data");

const mode = digestModes.HEX;
const strings = [];

for (pw of passwordTable) {
  const hashArr = [];
  const algorithms = Object.keys(hashes);
  for (sha of algorithms) {
    const hash = getHash(sha, pw, mode);
    const str = `${sha}: ${hash}`;
    hashArr.push(str);
  }
  const str = `plaintext: ${pw},\n${hashArr.join("\n")}\n`;
  strings.push(str);
}

writeToFile(strings.join("\n"));
