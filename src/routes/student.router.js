import express from "express";
import {
	createReview,
	getReviews,
	deleteReview,
} from "../controllers/student.controller.js";

const router = express.Router();


router.get("/", getStudent)

export default router;
