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
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const AthleteProfile = mongoose.model("athlete_profiles", AthleteProfileSchema);

export default AthleteProfile;
