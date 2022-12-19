const fs = require("fs");
const { stringify } = require("querystring");
// const book = {
//   title: "Ego is enemy",
//   author: "Akash",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer.toString());

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Akash";
data.age = 21;

const stringifyJSON = JSON.stringify(data);

console.log(stringifyJSON);

fs.writeFileSync("1-json.json", stringifyJSON);
