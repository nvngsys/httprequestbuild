// while https is built-in to Node, it is a module, so it must be required
var https = require('https');


function getAndPrintHTMLChunks() {

  var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

      // set encoding of received data to UTF-8
      response.setEncoding('utf8');

      // the callback is invoked when a `data` chunk is received
      response.on('data', function (data) {
          //console.log('Chunk Received. Length:', data.length);
          console.log('Chunk of data received:', data);  //returns the data in chunks
          console.log("\n");   // this adding a carriage return after each chunk is returned
      });

      // the callback is invoked when all of the data has been received
      // (the `end` of the stream)
      response.on('end', function () {
          console.log('Response stream complete.');
      });

  });

}

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
 
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
              //callback(null, body);
              //callback(body);
              console.log('Response stream complete.');
              console.log("contents of body " + body);
          });

      });


}

function getAndPrintHTML (options) {
  
  https.get(options, function (response) {
 
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
      console.log('Response stream complete.');
      console.log("contents of body " + body);
    });

  });

}




// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step3.html'
// };
var input = process.argv;
var myHost = process.argv[2];
var myPath = process.argv[3];

var requestOptions = {
  host: myHost,
  path: myPath
};


//getAndPrintHTMLChunks(returnData);
//getAndPrintHTML();
//   //node httpclientbuild3.js sytantris.github.io /http-examples/step3.html
getAndPrintHTML(requestOptions);
