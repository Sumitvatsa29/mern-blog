import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../Utils/error.js";

export const signup = async (req, res, next) => {
    // console.log(req.body);
    const {username, email, password } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password ===''){
        // return res.status(400).json({Message: 'All fieds are required'});
        next(errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    // console.log("Hashed password:", hashedPassword);

    try {
        await newUser.save();
    res.json( 'Sgnup succesful');
    } catch (error) {
        // res.status(500).json({message : error.message});
        next(error);
    }
    
}