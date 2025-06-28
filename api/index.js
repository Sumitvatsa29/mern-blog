import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import userRoutes from './routes/user.route.js';

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

app.use('/api/user', userRoutes);

app.get('/test',(req,res)=>{
    res.json({message: 'API is working'});
});