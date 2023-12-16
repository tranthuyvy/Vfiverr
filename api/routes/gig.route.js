import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  getGig,
  getGigs,
  createGig,
  deleteGig,
} from "../controllers/gig.controller.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.get("/", verifyToken, getGigs);
router.get("/single/:id", getGig);
router.delete("/:id", deleteGig);

export default router;
