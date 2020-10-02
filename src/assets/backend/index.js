const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/studentlist')

mongoose.connection.on('connected', () => {
    console.log('Connected DB through port @27017');
})

mongoose.connection.on('error', (error) =>{
    console.log(`Error : ${error}`);
})


const route = require('./routes/route')

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use('/', route);

app.listen(port, () =>{
    console.log(`Server started at port ${port}`)
})