const yargs = require("yargs");
const noteUtil = require("./notes");
// const chalk = require("chalk");
// const fs =require('fs')

// fs.writeFileSync('notes.txt','This file was created by Node.js')

// fs.appendFileSync('notes.txt', '/nThis file was created by Akash')

// const utils = require('./utils.js')

// console.log(utils);

// const getNotes = require("./notes");
// const msgGreen = chalk.green("Success!!");

// console.log(msgGreen);

// const chalk = require("chalk");
// const getNotes = require("./notes.js");

// const msg = getNotes();
// console.log(msg);

// const greenMsg = chalk.blue.inverse.bold("Success!");
// console.log(greenMsg);

// console.log(process.argv);
// console.log(yargs.argv.title);
// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note");
// }

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      default: "Default body",
      type: "string",
    },
  },
  handler: function (argv) {
    noteUtil.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remvoe a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    noteUtil.removeNote(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "Read a new note",
  handler: function () {
    console.log("Reading a new note");
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log("List notes");
  },
});

yargs.parse();
