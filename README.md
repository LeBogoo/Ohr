# Ohr

Generates random words with the german word "Ohr" or in english "Ear" in it.

## Wordlists

These are the wordlists I have used to generate the words:

- English: https://github.com/dwyl/english-words/blob/master/words.txt
- German: https://gist.github.com/MarvinJWendt/2f4f4154b8ae218600eb091a5706b5f4

## Usage

```bash
$ npm install
$ node index.js
```

## Filters

I have filtered the original wordlists to only contain letters from a-z and A-Z.

I have also removed some endings like "s" or "es" to reduce somes duplicates with just different endings (grammar sucks lol).
