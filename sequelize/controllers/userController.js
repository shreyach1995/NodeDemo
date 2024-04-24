var db = require("../models")
var user = db.user;
var addUser = async (req, res) => {
    const jane = user.build({ first_name: "John", last_name: "Doe" });
    console.log(jane instanceof user); // true
    console.log(jane.first_name); // "Jane"
    await jane.save();
    console.log('Jane was saved to the database!');
    res.status(200).json(jane.toJSON())
}

var getUsers = async (req, res) => {
    const allUsers = await user.findAll({});
    res.status(200).json({data:allUsers})
}

var getOneUser = async (req, res) => {
    const User = await user.findOne({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({data:User})
}

var postUser = async (req, res) => {
    var postData = req.body;
    if(postData.length > 1){
        var data = await user.bulkCreate(postData);
    }else{
        var data = await user.create(postData);
    }
    
    res.status(200).json({data:data});
}

var deleteUser = async (req, res) => {
    const User = await user.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({data:User})
}

var updateUser = async (req, res) => {
    var updatedData = req.body;
    const data = await user.update(updatedData, {
        where:{
            id: req.params.id
        }
    });
    res.status(200).json({data:data})
}

var queryUser = async (req, res) => {
    const data = await user.create({
        first_name: 'Demo',
        last_name: 'User'
      }, { fields: ['first_name'] });
      res.status(200).json({data:data})
}

module.exports = {
    addUser,
    getUsers,
    getOneUser,
    postUser,
    deleteUser,
    updateUser,
    queryUser
}