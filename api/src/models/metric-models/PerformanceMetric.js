import mongoose from "mongoose";
const Schema = mongoose.Schema;

// This Model Creates the Metrics to be Tracked for [General Performance]
const PerformanceMetricSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  metric_field: {
    type: String,
    enum: [
      "Speed",
      "Agility",
      "Acceleration",
      "Endurance",
      "Lower Body Strength",
      "Upper Body Strength",
      "Core Strength",
      "Balance & Stability",
      "Flexibility & Mobility",
      "Coordination",
      "Reaction Time",
      "Lactate Threshold",
      "VO2 Max",
    ],
  },
  measurement_type: {
    type: String,
    enum: ["Time", "Distance", "Weight", "Pass/Fail", "Other"],
  },
  measurement_units: {
    type: String,
    enum: [
      "Seconds",
      "Minutes",
      "Kg",
      "lbs",
      "Pass/Fail",
      "Yard",
      "Inche",
      "Meter",
      "CM",
      "Mile",
      "KM",
    ],
  },
});

const PerformanceMetric = mongoose.model(
  "performance_metrics",
  PerformanceMetricSchema
);

export default PerformanceMetric;
