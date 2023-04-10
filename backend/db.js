const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Genesis:Genesisjanuary1@cluster0.mnpxzze.mongodb.net/users?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;