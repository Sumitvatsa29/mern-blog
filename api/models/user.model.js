import { Timestamp } from "bson";
import { mongoose } from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        require : true,
        unique: true,
    },
    email:{
        type : String,
        require : true,
        unique: true,
    },
    passowrd:{
        type : String,
        require : true,
    },

},{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;
