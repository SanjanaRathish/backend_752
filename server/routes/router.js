const express =require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");


//get products data api
router.get("/getproducts",async(req,res)=>{
    try{
        const productsdata = await Products.find();
        //console.log("console the data "+productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error"+error.message);
    }
})

module.exports=router;
