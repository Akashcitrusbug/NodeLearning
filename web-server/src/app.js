const path = require("path");
const express = require("express");
const hbs = require("hbs");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viwesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handle bar viwes locaiton
app.set("view engine", "hbs");
app.set("views", viwesPath);
hbs.registerPartials(partialsPath);

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", { title: "Weather App", name: "akash" });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "akash",
    errorMessage: "Help article not found!",
  });
});

app.get("/help/", (req, res) => {
  res.render("help", { title: "Help!!!!", name: "akash" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About !!!!", name: "akash" });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "akash",
    errorMessage: "Page not found!",
  });
});

app.listen(3000, () => {
  console.log("Starting the server!");
});

// app.com
// app.com/help
// app.com/about
