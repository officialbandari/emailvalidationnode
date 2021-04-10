const mongoose = require('mongoose');
const validator = require('validator');


const peopleSchema = new mongoose.Schema({


    name :{
       type: String,
       required: true,
       minlength:3
    },
    
    email: {
        type :String,
        required:true,
        unique: [true, "Email is already present"],
        validate(value ){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email...")
            }

        }
    },
    age:{
        type: Number
    },
    email:{
        type: String,
        required:true,
        unique: [true, 'Email is already present'],
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Invalid Email")
        //     }
        // }

    },
  active:Boolean,
  author:{
      type:String

  },

date :{
    type:Date,
    default :Date.now()
}




})


const People = new mongoose.model('People',peopleSchema );
module.exports =People;