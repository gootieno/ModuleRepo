const http = require('http');
const fs = require("fs");

let dogs = [
  {
    dogId: 1,
    name: 'Fido',
    age: 2
  },
  {
    dogId: 2,
    name: 'Fluffy',
    age: 10
  }
];

let nextDogId = 3;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}


function getContentType(fileName) {
  const ext = fileName.split(".")[1];
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "css":
      return "text/css";
    default:
      return "text/plain";
  }
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === "GET" && req.url.startsWith('/assets')) {
    const assetPath = req.url.split("/assets")[1];
    try {
      const resBody = fs.readFileSync("./assets" + assetPath);
      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(assetPath));
      res.write(resBody);
      return res.end();
    } catch {
      console.error("Cannot find asset", assetPath, "in assets folder");
    }
  }

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }

    // route handlers
    // GET /
    if (req.method === 'GET' && req.url === '/') {
      const htmlPage = fs.readFileSync("./views/index.html", 'utf-8');
      const resBody = htmlPage;
      
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(resBody);
      return res.end();
    }

    // Phase 1: GET /dogs
    if (req.method === 'GET' && req.url === '/dogs') {
      // Your code here
      //Step 1: grab the right html page we need to replace values for. 
      const htmlPage = fs.readFileSync('./views/dogs.html', 'utf-8');

      //Step 2: create a variable to hold the tags that will replace the html page elements
      let dogsList = ""


      //Step 3: map throuth the dogs array up top and create list items that will hold the dog name values
      dogs.forEach(dog => {
        dogsList += `<li>${dog.name}</li>`
      })

      //Step 4: inject the dogsList li elements into the html page by globally replacing them
      const resBody = htmlPage.replace(/#{dogsList}/g, dogsList)
     
      console.log(resBody)

      //Step 5: Boiler plate-ish part for setting status code, headers, and ending the connection after writing 
      // the res body to the page. 
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html')
      return res.end(resBody)
    }

    // Phase 2: GET /dogs/new
    if (req.method === 'GET' && req.url === '/dogs/new') {
      // Your code here

      // Step 1: set the contents of the create dog page to a variable that will be the returned from requesting this page
      const dogsFormPage = fs.readFileSync('./views/create-dog.html')

      // Step 2: set the status code, headers, and end the connection by returning the dogs form page
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html')

      return res.end(dogsFormPage)
    }
    
    // Phase 3: GET /dogs/:dogId
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        const dog = dogs.find(dog => dog.dogId == dogId);

        // Verify you are getting the correct (and defined) dog by sending a request to /dogs/:dogId 
        console.log('dog found from from dogId: ',dog)
        // Your code here

        //Step1: get the dog details page and save it to a variable
        const dogDetails = fs.readFileSync('./views/dog-details.html', 'utf-8')


        //Step 2: set the response body to the dog details page after globally replacing its values
        const resBody = dogDetails.replace(/#{age}/g, dog.age)
                        .replace(/#{name}/g, dog.name)

        // Step 3: set the content-type, status code and end the connection by sending the resBody                
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 200;

        return res.end(resBody)
      }
    }

    // Phase 4: POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      // Your code here

      // We need an id, name, and age to create a dog. 

      // Step1: get the name and age values from the response body.
      const {name, age} = req.body

      // Step 2: create a dogId by using the getNewDogId function
      const dogId = getNewDogId()

      // Step 3: create a new dog by setting its values to an object containing dogId, name and age
      const newDog = {name, age, dogId}

      // Step 4: Add the created dog to the existing dogs array to "maintain the record"
      dogs.push(newDog)

      // Step 5: Since we need to redirect set the status code to 302 and set the second argument of setHeader to /dogs/${dogId}
      // where dogId is the new id of the created dog
      res.statusCode = 302;

      //Since the record exists now and our code will not break due to us pushing the new dog to the dogs array, we can
      // redirect to a path with an existing dog id. 

      // Step 5: Set the location header and end the connection
      res.setHeader('Location', `/dogs/${dogId}`)

      return res.end()
    }

    // Try to work remaining bonus sections on your own. If not able to request that I go over it friday during study time :) 

    // Phase 5: GET /dogs/:dogId/edit
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 4 && urlParts[3] === 'edit') {
        const dogId = urlParts[2];
        const dog = dogs.find(dog => dog.dogId == dogId);
        // Your code here
      }
    }

    // Phase 6: POST /dogs/:dogId
    if (req.method === 'POST' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        const dog = dogs.find(dog => dog.dogId == dogId);
        // Your code here
      }
    }

    // No matching endpoint
    const htmlPage = fs.readFileSync("./views/error.html", 'utf-8');
    const resBody = htmlPage
      .replace(/#{message}/g, 'Page Not Found');
    
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(resBody);
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));