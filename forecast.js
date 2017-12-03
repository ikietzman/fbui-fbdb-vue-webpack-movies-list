let request = require('request');

module.exports = {
  fetch: () => {
    request('https://api.darksky.net/forecast/cfea5bca03dc0cec7fba071cca4e6e65/37.8267,-122.4233', function (error, response, body) {
    // let data = JSON.parse(body);
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response.statusCode); //
    // if (error) {
    //   callback('Unable to connect');
    // }
    // else if (response.statusCode !== 200) {
    //   callback('Unable to find address');
    // }
    // //let data = JSON.parse(body);
    else if (response.statusCode) {
      let data = JSON.parse(body);
      console.log('Address:', data.currently.temperature);
      callback('Coordinates successfully fetched.');
    }
  }
}
