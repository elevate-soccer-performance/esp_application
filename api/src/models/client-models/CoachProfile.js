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
  date_registered: {
    type: Date,
  },
  athletes: [
    {
      name: {
        type: String,
      },
      id: {
        type: Schema.Types.ObjectId,
        ref: "athletes",
      },
    },
  ],
});

const CoachProfile = mongoose.model("coach_profiles", CoachProfileSchema);

export default CoachProfile;
