import express from "express";
import {
  createConversation,
  updateConversation,
  getSingleConversation,
  getConversations,
} from "../controllers/conversation.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.get("/single/:id", verifyToken, getSingleConversation);
router.post("/", verifyToken, createConversation);
router.put("/:id", verifyToken, updateConversation);

export default router;
