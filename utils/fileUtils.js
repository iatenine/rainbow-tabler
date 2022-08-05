const fs = require("fs");

writeToFile = async (data, salt = "") => {
  const filename = salt
    ? `./dist/salted/${salt}.txt`
    : `./dist/unsalted/out.txt`;
  try {
    fs.writeFileSync(filename, data);
  } catch (err) {
    console.error("Something went wrong. Please contact the maintainer");
    console.error(err);
  }
};

module.exports = { writeToFile };
