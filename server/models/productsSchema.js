const mongoose=require("mongoose");

const productsSchema = new mongoose.Schema({
    id:String,
    img:String,
    title:Object,
    price:Number
});


const Products = new mongoose.model("products",productsSchema);

module.exports=Products;