// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./current/first.txt", "utf-8");
// const second = readFileSync("./current/second.txt", "utf-8");

// console.log(first, second);

// const writeText = writeFileSync(
//   "./current/result.txt",
//   `result: ${first}, ${second}\r\n`,
//   { flag: "a" }
// );

const { readFile, writeFile } = require("fs");

readFile("./current/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./current/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./current/result2.txt", `${first}, ${second}`, (err, result) => {
      if (err) {
        return;
      }
      console.log(result);
    });
  });
});
