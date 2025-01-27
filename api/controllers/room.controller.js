import roomModel from "../models/room.model.js";
import hotelModel from "../models/hotel.model.js";
import { createError } from "../utils/error.utils.js";

export const createRoom = async (req, res, next) => {
      const hotelId = req.params.hotelid;
      const newRoom = new roomModel(req.body);

      try {
            const saveRoom = await newRoom.save();
            try {
                  await hotelModel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } });
                  res.status(200).json(saveRoom);
            } catch (err) {
                  next(err);
            }
      } catch(err) {
            next()
      }
}

export const updateRoom = async (req, res, next) => {
      try {
            const updateRoom = await roomModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }) 
            res.status(200).json(updateRoom)
      } catch (err) {
            next(err)
      }
}

export const deleteRoom = async (req, res, next) => {
      try {
            const deleteRoom = await roomModel.findByIdAndDelete(req.params.id)
            if (!deleteRoom) return next(createError(404, "Room not found"))
            res.status(200).json("Room has been deleted")
      } catch (err) {
            next(err)
      }
}

export const getRoom = async (req, res, next) => {
      try {
            const room = await roomModel.findById(req.params.id)
            if (!room) return next(createError(404, "Room not found"))
            res.status(200).json(room)
      }catch (err) {
            next(err)
      }
}

export const getAllRoom = async (req, res, next) => {
      try {
            const rooms = await roomModel.find()
            res.status(200).json(rooms)
      } catch (err) {
            next(err)
      }
}