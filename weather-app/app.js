const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=21ee0110002deea58d40f030a2aa6e75&query=42.3605,-71.0596";

request({ url: url, json: true }, (error, response) => {
  //   const data = JSON.parse(response.body);
  //   console.log(response.body.current);
  const currentData = response.body.current;
  console.log(
    `It is currently ${currentData.temperature} degress out.It feels like ${currentData.feelslike} degress out`
  );
});

// console.log("Starting");

// setTimeout(() => {
//   console.log("Called set timeout");
// }, 2000);

// setTimeout(() => {
//   console.log("0 Timer");
// }, 0);

// console.log("Stoping");
