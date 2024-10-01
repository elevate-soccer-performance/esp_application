import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Athlete Assessment Results for the Position Metric. The Position Metric being evaluated is created in the Position Function Metric Model
const PFASchema = new Schema({
  date: {
    type: Date,
  },
  metric: {
    type: Schema.Types.ObjectId,
    ref: "position_function_metrics",
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

const PFA = mongoose.model("pfas", PFASchema);

export default PFA;
