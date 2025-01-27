import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema({
      title: {
            type: String,
            required: true
      },
      price: {
            type: Number,
            required: true
      },
      maxPeople: {
            type: Number,
            required: true
      },
      desc: {
            type: String,
            required: true
      },
      roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}]
}, { timestamps: true });

// [
//       {number: 101, unavailableDates: [new Date('2022-02-01')]},
//       {number: 102, unavailableDates: [new Date('2022-02-01')]},
//       {number: 103, unavailableDates: [new Date('2022-02-01')]},
//       {number: 104, unavailableDates: [new Date('2022-02-01')]},
//       {number: 105, unavailableDates: [new Date('2022-02-01')]}
// ]

export default mongoose.model('Room', RoomSchema);