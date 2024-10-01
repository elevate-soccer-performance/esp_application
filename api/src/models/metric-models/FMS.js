import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FMSSchema = new Schema({
  movement_metric: {
    type: Schema.Types.ObjectId,
    ref: "movement_metrics",
  },
  date: {
    type: Date,
  },
  athlete: {
    type: Schema.Types.ObjectId,
    ref: "athlete_profiles",
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: "coach_profiles",
  },
  value: {
    type: Number,
  },
  note: {
    type: String,
  },
});

const FMS = mongoose.model("fms", FMSSchema);

export default FMS;