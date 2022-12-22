const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZGFkYXllMjY5Nm1pYXJyY29tIiwiYSI6ImNsYnlvZ2ViczA2bGgzcXBiM2JmcGMydXEifQ.aJRGzr9377Llxe2fF71XzA";

  request({ url, json: true }, (error, { body } = {}) => {
    console.log(body);
    if (error) {
      callback("Unable to connect ot locaton service!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find lcoation period. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
