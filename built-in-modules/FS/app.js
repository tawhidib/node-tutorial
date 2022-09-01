const fs = require("fs");

const lorem = fs.readFileSync("./content/read-lorem.txt");

fs.writeFileSync(
  "./content/write.txt",
  `${fs.readFileSync("./content/write.txt")} My name is Tawhid/n`
);
console.log(lorem.toString());
