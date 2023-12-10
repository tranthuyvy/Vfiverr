import express from "express";
import { fn } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/test", fn);

export default router;
