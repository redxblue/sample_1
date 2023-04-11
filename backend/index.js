const connectToMongo = require('./db'); //refactoring is required for  image upload and retrive blocks
const express = require('express')
const cors = require("cors");
const multer=require("multer") /////////////image upload///////////
const Properties = require('./models/propertyList')/////////////image upload///////////
const fs =require('fs')  /////////////image upload///////////
connectToMongo();
const app = express()
const port = 5000

app.use(express.json());                                                      //viewproperties

app.use(cors());
app.use('/', require('./routes/auth'));

// app.use('/api/notes', require('./routes/notes'))
////////////////////image retrieve//////////////////////
app.get('/viewproperties', async(req, res) => { 
  const allData=await Properties.find()
   res.json(allData)
 })
 ////////////////////image retrieve//////////////////////
////////////////////////////////////////image upload//////////////////////////////
const storage =multer.diskStorage({
  destination:(req, res,cb)=>{
    cb(null,'uploads')
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

const upload = multer({storage:storage})
app.post('/listproperty',upload.single('testImage'),(req, res)=>{
  const saveProperty=new Properties({
    address:req.body.address, 
    img:{
     data:fs.readFileSync(`${__dirname}/uploads/${req.file.filename}`),    //"uploads/" + req.file.filename   <-comment out this block ie img to prevent error
     contentType:"image/png"
    },
    description:req.body.description,
    price:req.body.price,
    area:req.body.area,
    coordinates:{
      latitude:req.body.coordinates.latitude,
      longitude:req.body.coordinates.longitude
    },
    pincode:req.body.pincode,
    state:req.body.state

  });
  saveProperty.save()
  .then((res)=>{console.log("property is saved")})
  .catch((err)=>{console.log(err,"error has occured")});
  res.send("property is saved")
});
////////////////////////////////////////image upload//////////////////////////////


app.listen(port, () => {
  console.log(`Weaver backend app listening at http://localhost:${port}`)
})