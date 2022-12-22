const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const app = express();
const port = process.env.PORT || 3000;
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

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send("You must provide a address term.");
  }
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send("You must provide a search term.");
  }
  console.log(req.query);
  res.send({ products: [] });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "akash",
    errorMessage: "Page not found!",
  });
});

app.listen(port, () => {
  console.log("Starting the server at port " + port);
});

// app.com
// app.com/help
// app.com/about
