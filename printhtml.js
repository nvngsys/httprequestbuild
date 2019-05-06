var https = require('https');

function getAndPrintHTML() {

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
  
getAndPrintHTML();
