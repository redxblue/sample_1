const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();
const tempo="74078989154";
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
//email: req.body.email
module.exports = router
//aadhar_no:tempo