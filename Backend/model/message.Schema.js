import mongoose  from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must Conatin At Least 3 characters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"last Name must Conatin At Least 3 characters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide A valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number Must Contain exact 10 Digits!"],
        maxLength:[10,"Phone Number Must Contain exact 10 Digits!"]

    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message Must Contain at least 10 characters!"],

    },

})


export const Message = mongoose.model("Message",messageSchema)