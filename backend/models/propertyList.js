const mongoose = require('mongoose');
const propertyList = new mongoose.Schema({
    address:{
        type:String
    },
    img:{
        data:Buffer,
        contentType:String                                 //9.2 keys
    },
    description:{
        type:String
    },
    price:{
        type:String       //may want to include security deposit amount here
    },
    area:{
        type:String
    },
    coordinates:{
        latitude :{
            type: String },
        longitude:{
            type: String
        }     
    },
    pincode:{
        type: String
    },
    state:{
        type:String
    },
    verified:{
        type:Boolean,
        default:false
    }

})
let Properties =mongoose.model("properties", propertyList);
module.exports =Properties;