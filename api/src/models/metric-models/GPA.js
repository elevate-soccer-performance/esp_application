import mongoose from "mongoose";
const Schema = mongoose.Schema;

// This Model creates the Athelte's evaluation for a specific performance metric that was created in the Performance Metric Schema
const GPASchema = new Schema({
  date: {
    type: Date,
  },
  performance_metric: {
    type: Schema.Types.ObjectId,
    ref: "performance_metrics",
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
  location: {
    type: String,
  },
  gender: {
    type: String,
    ennum: ["Male", "Female"],
  },
  age_at_test: {
    type: Number,
  },
  position_group_at_test: {
    type: String,
    enum: [
      "Attacking Focused Positions",
      "Defensive Focused Positions",
      "Width Focused Positions",
    ],
  },
  athlete_gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

const GPA = mongoose.model("gpas", GPASchema);

export default GPA;
