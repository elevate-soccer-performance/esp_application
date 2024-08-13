import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ParentProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
  },
  athlete_profiles: [
    {
      athlete: {
        type: Schema.Types.ObjectId,
        ref: "athlete_profiles",
      },
      name: {
        type: String,
      },
    },
  ],
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const ParentProfile = mongoose.model("parent_profiles", ParentProfileSchema);

export default ParentProfile;
