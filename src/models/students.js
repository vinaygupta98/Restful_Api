const mongoose = require("mongoose");
const validator = require("validator");


const student = new mongoose.Schema({
    name:{
        type:String,
        uppercase: true,
        trim:true,
        minlength: [2,"Enter your complete name (minimum 2 Words)"]
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please Enter Valid Email")            
            }
        },
        unique:[ true, "Email already Present Try to Login or Reset Your Password"]
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        },
    address:{
        type:String,
        require:true
    }
})


//new collection

const Student = new mongoose.model('Student', student);

module.exports = Student; 