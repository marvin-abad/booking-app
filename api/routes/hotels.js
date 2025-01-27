import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.utils.js";

const router = express.Router();

//CREATE
router.post("/save", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/:id", getHotel)

//GET ALL
router.get("/", getAllHotel)

export default router