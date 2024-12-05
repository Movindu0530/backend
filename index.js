
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const database=require("./config/db_config");

const app=express();
app.use(cors());
app.use(express.json());

const userRoutes=require('./routes/user_routes');

app.use("/api/v1/user",userRoutes);


app.listen(3000,()=>{console.log("Application started on port 3000")});


//http://localhost:3000/api/v1/user/register
//http://localhost:3000/api/v1/user/login