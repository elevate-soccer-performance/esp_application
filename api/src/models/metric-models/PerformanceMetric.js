import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PerformanceMetricSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: string,
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
});

const PerformanceMetric = mongoose.model(
  "performance_metrics",
  PerformanceMetricSchema
);

export default PerformanceMetric;
