import express from "express";
import {
	getSum
} from "../controllers/sum.math.controller.js";

const router = express.Router();

 router.get("/", getSum);

// router.get("/:id", getProduct);

// router.get("/:id/photos/:photoId", getProductPhotos);

export default router;
