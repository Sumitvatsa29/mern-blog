import  express  from "express";
import { test } from "../controllers/user.controllers.js";

const router = express.Router();

router.get('/test',test);

// router.get('/test',(req,res) => {
//     res.json({Message:' API is working I am under the water'});
// });

export default router;