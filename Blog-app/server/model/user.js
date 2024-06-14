import mongoose from "mongoose";

const userschema = mongoose.Schema({

    name:{
        type :String,
        required :true,
        unique:true

    },
    username :{
        type :String,
        required :true,
        unique:true
    },
    password:{
        type :String,
        required :true,
        unique:true
    }

})

const User = mongoose.model('user', userschema);

export default User;