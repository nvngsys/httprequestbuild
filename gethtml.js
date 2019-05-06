var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

function getHTML(options, callback) {

    /* Add your code here */
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
        callback(body);
      });
  
    });
  }
  
  function printHTML(html) {
    console.log(html);
  }


  getHTML(requestOptions, printHTML);