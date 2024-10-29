const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const UserSchema = new Schema({
    name : String,
    email : {type : String , unique : true},
    password : String
},
{
    collection : "User"
})

const UserModel = model('User' , UserSchema);

module.exports = UserModel;

