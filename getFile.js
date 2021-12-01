module.exports.func = function (number) {
  const fs = require("fs");
  const data = fs.readFileSync(`./${number}_data.txt`, "utf8");
  return data.split(/\r?\n/);
};
