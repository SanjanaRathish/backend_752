const mongoose=require("mongoose");

const productsSchema = new mongoose.Schema({
    id:String,
    url:String,
    title:Object,
    price:String
});


const Products = new mongoose.model("products",productsSchema);

module.exports=Products;