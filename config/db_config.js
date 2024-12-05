
const mongoose = require("mongoose");
const dbConnection= mongoose.connect("mongodb+srv://movinduanusara221:JWVMuvlBmo9xo93D@cluster0.sumxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("mongoDB connected"))
    .catch((e)=>console.log(e));


module.exports=dbConnection;
