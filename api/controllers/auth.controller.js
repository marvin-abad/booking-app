import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import userModel from "../models/user.model.js"
import { createError } from "../utils/error.utils.js";

dotenv.config()

export const register = async (req, res, next) => {
      try {

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const newUser = new userModel (
                  {
                        username: req.body.username,
                        email: req.body.email,
                        password: hash
                  }
            )

            await newUser.save()
            res.status(200).send("User has been created")
      } catch (err) {
            next(err)
      }
}

export const login = async (req, res, next) => {
      try {
            const user = await userModel.findOne({username: req.body.username})
            if(!user) return next(createError(404, "User not found"))

            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            if(!isPasswordCorrect) return next(createError(400, "Wrong password"))
            
            const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET_KEY)   

            const {password, isAdmin, ...otherDetails} = user._doc

            res
            .cookie("access_token", token, {
                  httpOnly: true,
            })
            .status(200).json({...otherDetails})
      } catch (err) {
            next(err)
      }
}
 