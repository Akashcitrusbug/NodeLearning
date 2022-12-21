// const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const url =
//   "http://api.weatherstack.com/current?access_key=21ee0110002deea58d40f030a2aa6e75&query=42.3605,-71.0596";

// request({ url: url, json: true }, (error, response) => {
//   //   const data = JSON.parse(response.body);
//   //   console.log(response.body.current);
//   const currentData = response.body.current;
//   console.log(
//     `It is currently ${currentData.temperature} degress out.It feels like ${currentData.feelslike} degress out`
//   );
// });

// console.log("Starting");

// setTimeout(() => {
//   console.log("Called set timeout");
// }, 2000);

// setTimeout(() => {
//   console.log("0 Timer");
// }, 0);

// console.log("Stoping");

// const geoCodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid293ZmFubmVhdCIsImEiOiJjbGJ4NnZubXgwM3hxM3FwaW1vc2E2OXA0In0.0rUEQ0anWJgaHMm_Ls4iDA";

// request({ url: geoCodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connet ot location services");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location. Try antoher search.");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const logitude = response.body.features[0].center[0];

//     console.log(latitude, logitude);
//   }
// });

// const geocode = (address, callback) => {
//   const url =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     encodeURIComponent(address) +
//     ".json?access_token=pk.eyJ1Ijoid293ZmFubmVhdCIsImEiOiJjbGJ4NnZubXgwM3hxM3FwaW1vc2E2OXA0In0.0rUEQ0anWJgaHMm_Ls4iDA";

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect ot locaton service!", undefined);
//     } else if (response.body.features.length === 0) {
//       callback("Unable to find lcoation period. Try another search", undefined);
//     } else {
//       callback(undefined, {
//         latitude: response.body.features[0].center[1],
//         longitude: response.body.features[0].center[0],
//         location: response.body.features[0].place_name,
//       });
//     }
//   });
// };

const address = process.argv[2];
if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
