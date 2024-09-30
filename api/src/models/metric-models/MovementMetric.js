import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MovementMetricSchema = new Schema({
  name: {
    type: String,
  },
  purpose: {
    type: String,
  },
  instructions: {
    type: [String],
  },
  tips: {
    type: [String],
  },
  implications: {
    type: String,
  },
  value_min: {
    type: Number,
    default: 0,
  },
  value_max: {
    type: Number,
    default: 3,
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

const MovementMetric = mongoose.model("movement_metrics", MovementMetricSchema);

export default MovementMetric;
