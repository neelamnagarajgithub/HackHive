import HackathonModel from "../models/Hackathon-model.js";

const Hackathons = HackathonModel;

//Returns all the Hackathons
const getAllHackthons = async (req, res) => {
  try {
    const AllHackathons = await Hackathons.find();
    res.status(200).json({
      AllHackathons,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//create a new Hackathon
const createHackathon = async (req, res) => {
  try {
    const newHackathon = await Hackathons.create(req.body);
    res.status(201).json({
      newHackathon,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//returns a particular Hackathon details
const getHackathonById = async (req, res) => {
  try {
    const HackathonById = await Hackathons.findById(req.params.id);
    res.status(200).json({
      HackathonById,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Updates The Hackathon Details
const UpdateHackathon = async (req, res) => {
  try {
    const UpdateHackathonById = await Hackathons.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      UpdateHackathonById,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//Delete a Particular Hackathon
const DeleteHackathon = async (req, res) => {
  try {
    const DeleteAHackathon = await Hackathons.findByIdAndDelete(req.params.id);
    res.status(204).json({
      DeleteAHackathon,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export {
  getAllHackthons,
  createHackathon,
  getHackathonById,
  UpdateHackathon,
  DeleteHackathon,
};
