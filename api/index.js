import express from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGOO).then(()=>{
    console.log('Mongo is connected');
}).catch(()=>{
    console.log('Error');
});
const app = express();

app.use(express.json()); // this line help us to send json file in the backend

app.listen(3000, () => {
  console.log("server is running on the 3000 Port E");
});

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);

app.get('/test',(req,res)=>{
    res.json({message: 'API is working'});
});