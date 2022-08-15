const http = require('http');
const fs = require("fs");

const getContentType = (filePath) => {
  let fileExtention = filePath.split('.')[1]

  console.log('file extention ',fileExtention)

  switch(fileExtention){
    case 'jpg' || 'jpeg':
      fileExtention === 'jpg' ? 'image/jpg':
      'image/jpeg'
    case 'css':
      return 'text/css'
    default: 
      return 'text/plain'
  }

}

const server = http.createServer((req, res) => {
  // Your code here
  if(req.method === 'GET' && req.url.startsWith('/static')){
    console.log('request url ', req.url)

    const filePath = req.url.split('/static')[1]

    console.log('file path ', filePath)

    const resBody = fs.readFileSync(`./assets${filePath}`)

    res.statusCode = 200;
    //TODO: Set Header
    res.setHeader('Content-Type', getContentType(filePath))

    return res.end(resBody)
  }

  const resBody = fs.readFileSync('./index.html', 'utf-8')

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  return res.end(resBody)
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));