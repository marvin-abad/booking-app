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