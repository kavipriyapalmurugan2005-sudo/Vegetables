const express=require("express");

const User=require("../model/productmodel");

const router=express.Router();

router.post("/login",async(req,res)=>{

try{

const user=new User(req.body);

await user.save();

res.json({message:"User saved successfully"});

}catch(error){

res.status(500).json({message:error.message});

}

});

module.exports=router;