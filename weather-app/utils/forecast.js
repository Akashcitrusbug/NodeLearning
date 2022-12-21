const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=21ee0110002deea58d40f030a2aa6e75&query=${lat},${long}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect ot locaton service!", undefined);
    } else if (body.error) {
      callback("Unable to find lcoation period. Try another search", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${body.current.temperature} degress out.It feels like ${body.current.feelslike} degress out`
      );
    }
  });
};

// request({ url: url, json: true }, (error, response) => {
//   //   const data = JSON.parse(response.body);
//   //   console.log(response.body.current);
//   const currentData = response.body.current;
//   console.log(
//     ``
//   );
// });

module.exports = forecast;
