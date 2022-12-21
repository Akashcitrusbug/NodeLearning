const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=21ee0110002deea58d40f030a2aa6e75&query=42.3605,-71.0596";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    // console.log(chunk);
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
