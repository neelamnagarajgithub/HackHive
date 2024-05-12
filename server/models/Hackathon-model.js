import mongoose from "mongoose";

const HackathonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Hackathon must have a name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Hackathon must have a description"],
  },
  startDate: {
    type: Date,
    required: [true, "Hackathon must have a start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Hackathon must have an end date"],
  },
  registrationDeadline: {
    type: Date,
    required: [true, "Hackathon must have a registration deadline"],
  },
  themes: [{
    type: String,
    trim: true,
  }],
  isVirtual: {
    type: Boolean,
    default: false,
  },
  location: {
    venue: String,
    address: String,
    city: String,
    state: String,
    country: String
  },
  maxTeams: {
    type: Number,
    required: [true, "Hackathon must specify the maximum number of teams"],
  },
  prizes: [{
    position: Number,
    description: String,
    value: Number,
  }],
  sponsors: [{
    name: String,
    logoUrl: String,
  }],
  organizers: [{
    name: String,
    contactInfo: String,
  }],
  website: {
    type: String,
    trim: true,
  },
  contactEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
}, { timestamps: true });

const HackathonModel = mongoose.model("Hackathon", HackathonSchema);

export default HackathonModel;