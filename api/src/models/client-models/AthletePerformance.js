import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AthletePerformanceSchema = new Schema({
  athlete: {
    type: Schema.Types.ObjectId,
    ref: "athletes",
  },
  date: {
    type: Date,
  },
  metric: {
    name: {
      type: String,
    },
    id: {
      type: Schema.Types.ObjectId,
      ref: "performance_metrics",
    },
  },
  value: {
    // Value for Time, Weight, Distance
    type: Number,
  },
  pass: {
    // If Pass Fail Test
    type: Boolean,
  },
  time_measurement: {
    type: String,
    enum: ["seconds", "minutes"],
  },
  weight_measurement: {
    type: String,
    enum: ["lbs", "kgs"],
  },
  distance_measurement: {
    type: String,
    enum: ["ft", "yards", "m", "km"],
  },
});

const AthletePerformance = mongoose.model(
  "athlete_performances",
  AthletePerformanceSchema
);

export default AthletePerformance;
