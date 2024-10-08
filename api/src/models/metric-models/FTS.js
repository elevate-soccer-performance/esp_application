import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Athlete evaluation results, the skill being evaluated is created in the Skill Metric Model
const FTSSchema = new Schema({
  date: {
    type: Date,
  },
  skill_metric: {
    type: Schema.Types.ObjectId,
    ref: "skill_metrics",
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
  note: {
    type: String,
  },
});

const FTS = mongoose.model("fts", FTSSchema);

export default FTS;
