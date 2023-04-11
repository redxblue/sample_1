const mongoose = require('mongoose');
const propertyList = new mongoose.Schema({
    address:{
        type:String
    },
    img:{
        data:Buffer,
        contentType:String                                 //8.2 keys
    },
    description:{
        type:String
    },
    price:{
        type:String
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
    }

})
let Properties =mongoose.model("properties", propertyList);
module.exports =Properties;