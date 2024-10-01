import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AthleteProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Active", "In-Active"],
    default: "Active",
  },
  associated_users: [
    {
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      id: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  date_of_birth: {
    type: Date,
    required: [true, "Include Athlete Date of Birth"],
  },
  current_club_level: {
    type: String,
    enum: ["ECRL", "ECNL", "MLS-Next"],
    required: [true, "Include Athlete Current Club Level"],
  },
  primary_position: {
    type: String,
    enum: [
      "Attacking Focused Positions",
      "Defensive Focused Positions",
      "Width Focused Positions",
    ],
    required: [true, "Include Athlete Primary Position"],
  },
  parent_profile: {
    type: Schema.Types.ObjectId,
    ref: "parent_profiles",
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const AthleteProfile = mongoose.model("athlete_profiles", AthleteProfileSchema);

export default AthleteProfile;
