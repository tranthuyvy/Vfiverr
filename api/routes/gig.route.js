import express from "express";
import { fn } from "../controllers/gig.controller.js";

const router = express.Router();

router.get("/test", fn);

export default router;
