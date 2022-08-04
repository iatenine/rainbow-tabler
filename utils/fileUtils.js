const fs = require("fs");

writeToFile = (data, salt = "") => {
  const filename = salt
    ? `./dist/salted/${salt}.txt`
    : "./dist/unsalted/out.txt";
  fs.writeFileSync(filename, data, (err) => {
    console.error("Something went wrong: ", err);
  });
};

module.exports = { writeToFile };
