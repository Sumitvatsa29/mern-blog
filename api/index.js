import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGOO).then(()=>{
    console.log('Mongo is connected');
}).catch(()=>{
    console.log('Error');
});
const app = express();

app.listen(3000, () => {
  console.log("server is running on the 3000 Port E");
});
