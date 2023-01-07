const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true ,
    },
    passWordHash: {
     type: String,
     required: true,

    } 
},{
    timestamps: true,
})


export default mongoose.model('User' , UserSchema)