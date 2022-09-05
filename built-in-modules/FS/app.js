const fs = require("fs");

// fs.readFile(`${__dirname}/content/read-lorem.txt`, "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

getText(`${__dirname}/contents/read-lorem.txt`)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
