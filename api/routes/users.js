import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.controller.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.utils.js";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//       res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//       res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//       res.send("hello admin, you are logged in and you can delete any account")
// })

//UPDATE
router.put("/:id", verifyUser,updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getAllUser)

export default router