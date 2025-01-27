import hotelModel from "../models/hotel.model.js"

export const createHotel = async (req, res, next) => {
      const newHotel = new hotelModel(req.body)

      try {
            const savedHotel = await newHotel.save()
            res.status(200).json(savedHotel)
      } catch (err) {
            next(err)
      }
}

export const updateHotel = async (req, res, next) => {
      try {
            const updateHotel = await hotelModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updateHotel)
      } catch (err) {
            next(err)
      }
}

export const deleteHotel = async (req, res, next) => {
      try {
            await hotelModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Hotel has been deleted")
      } catch (err) {
            next(err)
      }
}

export const getHotel = async (req, res, next) => {
      try {
            const Hotel = await hotelModel.findById(req.params.id)
            res.status(200).json(Hotel)
      } catch (err) {
            next(err)
      }
}

export const getAllHotel = async (req, res, next) => {
      try {
            const Hotels = await hotelModel.find()
            res.status(200).json(Hotels)
      } catch (err) {
            next(err)
      }
}