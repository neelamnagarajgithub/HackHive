import express from "express";
import {
  getAllHackthons,
  createHackathon,
  getHackathonById,
  UpdateHackathon,
  DeleteHackathon,
} from "../controllers/Hackathon-Controller.js";

const HackathonRouter = express.Router();

HackathonRouter.route("/").get(getAllHackthons).post(createHackathon);

HackathonRouter.route("/:id")
  .get(getHackathonById)
  .patch(UpdateHackathon)
  .delete(DeleteHackathon);

export {HackathonRouter};
