const fs = require("fs");
const path = require("path");

fs.readFile(`${__dirname}/content/read-async.txt`, "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    fs.readFile(
      `${__dirname}/content/read-async2.txt`,
      "utf-8",
      (error2, data) => {
        if (error2) {
          console.log(error2);
        } else {
          //   console.log(`${result} ${data}`);
          fs.writeFile(
            `${__dirname}/content/write-async.txt`,
            `${result} ${data}`,
            (error3) => {
              if (error3) {
                console.log(error3);
              } else {
                console.log("file is successfully written...");
              }
            }
          );
        }
      }
    );
  }
});
