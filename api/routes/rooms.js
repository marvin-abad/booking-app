import express from "express";
import { verifyAdmin } from "../utils/verifyToken.utils.js";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.controller.js";

const router = express.Router();

router.post("/save", verifyAdmin, createRoom)
router.put("/:id", verifyAdmin, updateRoom)
router.delete("/:id", verifyAdmin, deleteRoom)
router.get("/:id", getRoom)
router.get("/", getAllRoom)


export default router