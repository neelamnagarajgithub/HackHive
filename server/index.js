import express from "express";
import mongoose from "mongoose";
import { HackathonRouter } from "./routes/Hackathon-route.js";
import dotenv from "dotenv";
dotenv.config({path:'./config.env'});

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)   
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((err) => {
    console.log("DB Disconnected");
  });


console.log(process.env.PORT);

app.use('/api/v1/hackathons',HackathonRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
