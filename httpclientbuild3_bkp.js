// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

function getAndPrintHTMLChunks(inhost, inpath, callback) {

  console.log(`Host: ${inhost}  /  Path: ${inpath}`);
  // var requestOptions = {
  //     host: 'sytantris.github.io',
  //     path: '/http-examples/step1.html'
  // };
  var requestOptions = {
    host: inhost,
    path: inpath
  };

  https.get(requestOptions, function (response) {
    if (response.statusCode !== 200) {
      callback(new Error('Request Failed with Status Code ' + response.statusCode), null);
      return;
    }
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    var body = '';
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      body += data;

    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function () {
      callback(null, body);
      //callback(body);
      console.log('Response stream complete.');
      //console.log("contents of body " + body);
    });

  });

}

// I borrowed from Jensens build of client.js. I was interested in how he was using callback in his example to return the error message
// and the data
function mainLine(myHost, myPath) {
  console.log('starting request')
  getAndPrintHTMLChunks(myHost, myPath, function (error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}

//getAndPrintHTMLChunks(returnData);
// calling main will then call the function given in the lab getAndPrintHTMLChunks

var input = process.argv;
var myHost = process.argv[2];
var myPath = process.argv[3];

// hardcoded parameter used for testing / dynamic above
//var myHost = 'sytantris.github.io';
//var myPath = '/http-examples/step1.html';

// this must be run command line with url and end
//node httpclientbuild3.js sytantris.github.io /http-examples/step1.html
mainLine(myHost, myPath);