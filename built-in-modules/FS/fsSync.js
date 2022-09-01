const fs = require("fs");
const path = require("path");

const pathSep = path.sep;

const lorem = fs.readFileSync(
  `${__dirname}${pathSep}content${pathSep}read-lorem.txt`,
  "utf-8"
);

// fs.writeFileSync(
//   "./content/write.txt",
//   `${fs.readFileSync("./content/write.txt")} My name is Tawhid/n`
// );

fs.writeFileSync(`${__dirname}/content/write.txt`, lorem, { flag: "a" });
console.log(lorem);
