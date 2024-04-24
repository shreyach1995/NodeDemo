const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

// mongoose.connect(process.env.DB_URI, {useNewParser:true});

mongoose.connect("mongodb://localhost:27017/node_crud", { useNewParser : true, useUnifiedTopology : true });
const db = mongoose.connection;
db.on('error', (error) => console.log('error = ', error));
db.once('open', () => console.log("Connected..."));

app.get('/', (req, res) => {
    res.send("Hello World");
});

//console.log(process.env.PORT);
//const PORT = process.env.PORT || 8000;
app.listen(5002, () => {
    console.log('running...');
});