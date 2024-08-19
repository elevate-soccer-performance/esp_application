import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FunctionMetricSchema = new Schema({
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
      "Outside Back & Winger",
      "Striker & Attacking Mid",
      "Center Back & Holding Mid",
    ],
  },
});

const FunctionMetric = mongoose.model("function_metrics", FunctionMetricSchema);

export default FunctionMetric;
