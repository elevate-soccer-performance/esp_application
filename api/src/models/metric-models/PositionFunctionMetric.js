import mongoose from "mongoose";
const Schema = mongoose.Schema;

// This schema creates the metrics that will be tracked for the three main position groups. The Position Function Assessment (PFA) is where the individual Athlete results will be tracked
const PositionFunctionMetricSchema = new Schema({
  name: {
    type: String,
    required: ["Please provide a name"],
  },
  description: {
    type: String,
  },
  metric_field: {
    type: String,
    enum: ["Athletic", "Technical", "Tactical"],
  },
  position_group: {
    type: String,
    enum: [
      "Attacking Focused Positions",
      "Defensive Focused Positions",
      "Width Focused Positions",
    ],
  },
  max_value: {
    type: Number,
    default: 5,
  },
  min_value: {
    type: Number,
    default: 1,
  },
  instructions: {
    type: [String],
  },
  tips: {
    type: [String],
  },
  scoring_rubric: {
    type: [String],
  },
  photos: [
    {
      src: {
        type: String,
      },
    },
  ],
  videos: [
    {
      src: {
        type: String,
      },
    },
  ],
});

const PositionFunctionMetric = mongoose.model(
  "position_function_metrics",
  PositionFunctionMetricSchema
);

export default PositionFunctionMetric;
