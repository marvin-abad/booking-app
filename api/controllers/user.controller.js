import userModel from "../models/user.model.js"

export const updateUser = async (req, res, next) => {
      try {
            const updateUser = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

            if (!updateUser) return next(createError(404, "User not found"))

            res.status(200).json(updateUser)
      } catch (err) {
            next(err)
      }
}

export const deleteUser = async (req, res, next) => {
      try {
            await userModel.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
      } catch (err) {
            next(err)
      }
}

export const getUser = async (req, res, next) => {
      try {
            const User = await userModel.findById(req.params.id)
            res.status(200).json(User)
      } catch (err) {
            next(err)
      }
}

export const getAllUser = async (req, res, next) => {
      try {
            const Users = await userModel.find()
            res.status(200).json(Users)
      } catch (err) {
            next(err)
      }
}