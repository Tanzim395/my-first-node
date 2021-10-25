const express = require('express'); //express import required
const cors = require('cors');
const app = express();//call the express

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000; //set the port via environment variable or localhost 3000 or any 4 digit number as port.

app.get('/', (req, res) => {
    res.send("Hello World. Welcome to the World of Node Js. Peace. Have A Great Day!!!")
}) //get the app, callback req & res, sometimes next then arrow function send response

const users = [
    { id: 0, name: 'Shabna', email: 'shabana@gamil.com', phone: '016969696969' },
    { id: 1, name: 'Detergentna', email: 'detergentna@gamil.com', phone: '016969696969' },
    { id: 2, name: 'Handwashna', email: 'handwashna@gamil.com', phone: '016969696969' },
    { id: 3, name: 'Vimbarna', email: 'vimberna@gamil.com', phone: '016969696969' },
    { id: 4, name: 'Surfexcelna', email: 'surfexcelna@gamil.com', phone: '016969696969' },
    { id: 5, name: 'Sanitizerna', email: 'sanitizerna@gamil.com', phone: '016969696969' },
];

app.get('/users', (req, res) => {
    //use search query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'lichi', 'banana'])
})

app.get('/fruits/mangoes/khirshapati', (req, res) => {
    res.send('Yummy Tasty Mango');
})

app.listen(port, () => {
    console.log("Listening to port", port);
}); //listen to port

//npm run start-dev

//gitignore node modules