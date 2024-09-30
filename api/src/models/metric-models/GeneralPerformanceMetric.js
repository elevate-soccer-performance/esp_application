import mongoose from "mongoose";
const Schema = mongoose.Schema;

// This Model is the storage of Athlete Scores from the metrics created in the Performance Metric Models
const GeneralPerformanceMetricSchema = new Schema({
  date: {
    type: Date,
  },
  performance_metric: {
    type: Schema.Types.ObjectId,
    ref: "performance_metrics",
  },
  value: {
    type: Number,
  },
  athlete: {
    type: Schema.Types.ObjectId,
    ref: "athlete_profiles",
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: "coach_profiles",
  },
  location: {
    type: String,
  },
  age_at_test: {
    type: Number,
  },
  position_group_at_test: {
    type: String,
    enum: [
      "Striker & Attacking Mid",
      "Winger & Outside Back",
      "Center Back & Holding Mid",
    ],
  },
  athlete_gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

const GeneralPerformanceMetric = mongoose.model(
  "general_performance_metrics",
  GeneralPerformanceMetricSchema
);

export default GeneralPerformanceMetric;
