const fs = require("fs");
const file = "words/german.txt";

const words = fs
  .readFileSync(file, "utf8")
  .split("\n")
  .filter((word) => {
    return word.match(/^[a-zA-Z]+$/g);
  })
  .filter((word) => {
    return !word.includes("ohr") || !word.includes("Ohr");
  })
  .filter((word) => {
    return word.includes("or");
  })
  .filter((word) => {
    return (
      !word.endsWith("es") &&
      !word.endsWith("en") &&
      !word.endsWith("er") &&
      !word.endsWith("em") &&
      !word.endsWith("et") &&
      !word.endsWith("ts") &&
      !word.endsWith("e") &&
      !word.endsWith("s") &&
      !word.endsWith("isch")
    );
  });

fs.writeFileSync(file, words.join("\n"));
