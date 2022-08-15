const http = require('http');

const dogs = [
  {
    dogId: 1,
    name: "Fluffy",
    age: 2
  }
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId; // 2
  nextDogId++; // 3
  return newDogId; // 2
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // request is finished assembly the entire request body
    // Parsing the body of the request depending on the Content-Type header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ======================== ROUTE HANDLERS ======================== */

    // GET /dogs
    if (req.method === 'GET' && req.url === '/dogs') {
      // Your code here
      //1. set status code
      //2. set headers
      //3. return json and end response 

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify(dogs))
    }

    // GET /dogs/:dogId
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/'); // ['', 'dogs', '1']
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here
        const foundDog = dogs.find(dog => dogId == dog.dogId)

        // another way of finding dog. Can be  more than one way
        // const foundDog = dogs.find(dog => Number(dogId) == dog.dogId)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(foundDog));
      }
    }

    // POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      const { name, age } = req.body;
      // Your code here
      const newDog = {
        name,
        age,
        dogId: getNewDogId()
      }

      dogs.push(newDog)

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json')
      return res.end(JSON.stringify(newDog))
    }

    // PUT or PATCH /dogs/:dogId
    if ((req.method === 'PUT' || req.method === 'PATCH')  && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        // Your code here
        // Get all values needed to update and find dog
        const dogId = urlParts[2];
        const {name, age} = req.body

        console.log('dogs before reference', dogs)


        const foundDog = dogs.find(dog =>  Number(dogId) === dog.dogId)

        
        foundDog.name = name
        foundDog.age = age

        console.log('dogs after reference', dogs)

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(foundDog))
      }
    }

    // DELETE /dogs/:dogId
    if (req.method === 'DELETE' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // Your code here

        // Find the dog index to use splice 
        const dogIndex = dogs.findIndex(dog => dog.dogId == dogId)

        dogs.splice(dogIndex, 1)

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')


        // typically not a format you would see
        return res.end("Successfully deleted")

        // normally we would stringify a key value pair like this 
        // return res.end({message:"Successfully deleted"})

      }
    }

    // No matching endpoint
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    return res.end('Endpoint not found');
  });

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));