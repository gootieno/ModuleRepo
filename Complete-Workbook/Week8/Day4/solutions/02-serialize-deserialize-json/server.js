const http = require('http');
// example requests

/*

    fetch('/someUrl', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.Stringify(someBodyObject)
    })

     fetch('/someUrl', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        key: "value"
      })
    })
  */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // adds data sent to a variable called reqBody
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  
  // parse reqBody data and define any routing
  req.on("end", () => {
    // Parse the body of the request as JSON if Content-Type header is
      // application/json
    // Parse the body of the request as x-www-form-urlencoded if Content-Type
      // header is x-www-form-urlencoded


    // check to see if data was sent  
    if (reqBody) {
      // parse data based on content-type

      // **SIDE READ** how content type syntax is being handled regarding capitalization
      // https://nodejs.org/api/http.html#http

      if(req.headers['content-type'] === 'application/json'){ // if json was sent parse as json
        req.body = JSON.parse(reqBody)
      } else { //  if x-www-url-formencoded was sent parse with split & map
        req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      // Log the body of the request to the terminal
        console.log(req.body);
      }

      
    }


    const resBody = {
      "Hello": "World!"
    };

    // handle our response

    /*
    1. set status code
    2. set header
    3. end the connection and send any data if needed

    */
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify(resBody))
  

    // Return the `resBody` object as JSON in the body of the response
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));