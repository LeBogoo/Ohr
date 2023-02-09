const express = require("express");
const fs = require("fs");
const app = express();

const words = {};

fs.readdirSync("./words").forEach((file) => {
  const lang = file.split(".")[0];
  words[lang] = fs.readFileSync(`words/${lang}.txt`, "utf8").split("\n");
});

function getRandomEarWord(lang) {
  const wordsArr = words[lang];
  if (!wordsArr) return null;
  const index = Math.floor(Math.random() * wordsArr.length);
  let word = wordsArr[index];
  switch (lang) {
    case "english":
      word = word.replace(/er/g, "ear");
      word = word.replace(/Er/g, "Ear");
      break;
    case "german":
      word = word.replace(/or/g, "ohr");
      word = word.replace(/Or/g, "Ohr");
  }

  return word;
}

app.use(express.static("public"));

app.get("/word/:lang", (req, res) => {
  const lang = req.params.lang;
  const word = getRandomEarWord(lang);
  res.send(word);
});

app.get("/languages", (req, res) => {
  res.send(Object.keys(words));
});

app.listen(7635, () => {
  console.log("Server is running on port http://localhost:7635");
});
