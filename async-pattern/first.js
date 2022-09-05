const fs = require("fs");

fs.readFile(`${__dirname}/contents/read.txt`, "utf-8", (error, data) => {
  if (error) {
    console.log("Error!!!");
    return;
  } else {
    console.log(data);
  }
});
