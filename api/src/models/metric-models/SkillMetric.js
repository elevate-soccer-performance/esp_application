import mongoose from "mongoose";
const Schema = mongoose.Schema;

// This Model creates the fundamental technical assessments that will be used to measure an athlete's ability. This will be used in the FTS where the athlete's results are tracked
const SkillMetricSchema = new Schema({
  name: {
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
  instructions: {
    type: [String],
  },
  field: {
    type: String,
    enum: [
      "Passing & Receiving",
      "First Touch",
      "Dribbling",
      "Striking & Shooting",
      "Scanning",
    ],
  },
  assigned_level: {
    type: Number,
    min: 1,
    max: 3,
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

const SkillMetric = mongoose.model("skill_metrics", SkillMetricSchema);

export default SkillMetric;
