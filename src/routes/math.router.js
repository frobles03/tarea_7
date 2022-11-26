import express from "express";
import {
	getSum
} from "../controllers/sum.math.controller.js";
import {
	getRes
} from "../controllers/res.math.controller.js";
import {
	getMult
} from "../controllers/mult.math.controller.js";
import {
	getDiv
} from "../controllers/div.math.controller.js";
const router = express.Router();

 router.get("/sum", getSum); //duda
 router.get("/substraction", getRes); 
 router.get("/multiplication", getMult); 
 router.get("/division", getDiv); 


export default router;
