import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CoachProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  certifications: {
    type: String,
  },
  registration_date: {
    type: Date,
  },
});

const CoachProfile = mongoose.model("coach_profiles", CoachProfileSchema);

export default CoachProfile;
