const express = require('express'); //express import required
const app = express();//call the express
const port = process.env.PORT || 3000; //set the port via environment variable or localhost 3000 or any 4 digit number as port.

app.get('/', (req, res) => {
    res.send("Hello World. Welcome to the World of Node Js. Peace")
}) //get the app, callback req & res, sometimes next then arrow function send response

app.listen(port, () => {
    console.log("Listening to port", port);
}); //listen to port

//run node index.js cli