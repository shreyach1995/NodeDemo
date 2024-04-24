var express = require('express')
var bodyParser = require('body-parser')
//const User = require("./models/user")
//const Contact = require('./models/contact')
require("./models")
var userCtrl = require("./controllers/userController")
var app = express()
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/add-user', userCtrl.addUser)
app.post('/post-user', userCtrl.postUser)
app.get('/get-user', userCtrl.getUsers)
app.get('/specific-user/:id', userCtrl.getOneUser)
app.delete('/delete-user/:id', userCtrl.deleteUser)
app.patch('/update-user/:id', userCtrl.updateUser)
app.get('/query-user', userCtrl.queryUser)

//User.sync({ force: true });
//Contact.sync({ force: true });
app.listen(8000, () => {
    console.log("Connected...")
})