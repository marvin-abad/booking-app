import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

import userRegister from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = async () => {
      try {
            await mongoose.connect(process.env.MONGO);
            console.log("Connected to MongoDB");
      } catch (error) {
            console.log("error", error);
      }
};

app.get("/", (req, res) => {
      res.send("Hello World!");
});

// middleware
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
      const errorStatus = err.status || 500;
      const errorMessage = err.message || "Something went wrong";
      return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack,
      });
})

app.listen(3000, () => {
      connect();
      console.log("Listening on port 3000");
});