const fs = require("fs");
const file = "words/english.txt";

const words = fs
  .readFileSync(file, "utf8")
  .split("\n")
  .filter((word) => {
    return word.match(/^[a-zA-Z]+$/g);
  })
  .filter((word) => {
    return word.includes("er");
  });

fs.writeFileSync(file, words.join("\n"));
