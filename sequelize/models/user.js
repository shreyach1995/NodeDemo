module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

User.init({
  // Model attributes are defined here
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
  
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
return User;
}