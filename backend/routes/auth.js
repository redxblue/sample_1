const express = require('express');
const User = require('../models/userSchema');
const Property = require('../models/propertyList')
const router = express.Router();
const tempo="74078989154";
//////////////////////////////////////////Route #1--Register---//////////////////////////////////////////
router.post('/register', async(req, res)=>{
    try {
        let user = await User.findOne({aadhar_no:req.body.aadhar_no}); //checking if user exists
        if (user) {
            console.log(user)
            return res.status(200).json({success: true,
                message: "Yes a user with this Aadhar exists",user})
        }
        else{
            return res.status(400).json({message: "A user with this Aadhar does not exists" })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured");
      }
    })

    //////////////////////////////////////////Route #2--List Property---//////////////////////////////////////////

    router.post('/listproperty', async(req, res)=>{
        const {address,img,description,price,area,pincode,state }=req.body
        try{
            const propertyExists= await Property.findOne({address});
            if(propertyExists){
                return res.status(422).json({error:"Property already exists"});
            }
            else{
                const newProperty =new Property({address,img,description,price,area,coordinates:{
                    latitude:req.body.coordinates.latitude,
                    longitude:req.body.coordinates.longitude
                  },pincode,state })
                await newProperty.save();
                res.status(200).json({message:"new property has successfully been added for verification "})
                }
        }
        catch(error){
            console.log(error);
            res.status(500).send("Some Error occured");
        }

    });

//////////////////////////////////////////Route #3--Land Inspector---//////////////////////////////////////////
router.post('/landinspector', async(req, res)=>{
    const {_id}=req.body
    try{
        const propertyExists= await Property.updateOne({_id:_id},{
            $set:{
                verified:true
            }  
        })
        if(propertyExists){

            return res.status(200).json({message:"Property is authenticated for listing"});
        }
        else{
            res.status(422).json({error:"not authenticated"})
            }
    }
    catch(error){
        console.log(error);
        res.status(500).send("Some Error occured");
    }

});
//////////////////////////////////////////Route #3--Land Inspector---//////////////////////////////////////////
router.post('/userdashboard', async(req, res)=>{
    const {owner}=req.body
    try{
        const verifiedRequests=await Property.find({owner:req.body.owner,verified:true})
        if(verifiedRequests){

            return res.status(200).json(verifiedRequests);
        }
        else{
            res.status(422).json({error:"You have no verified properties available"})
            }
    }
    catch(error){
        console.log(error);
        res.status(500).send("Some Error occured");
    }

});

//email: req.body.email
module.exports = router
//aadhar_no:tempo