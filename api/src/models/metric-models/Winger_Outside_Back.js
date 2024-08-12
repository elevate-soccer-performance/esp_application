import mongoose from "mongoose";
const Schema = mongoose.Schema;

const WingerOutsideBackEvalSchema = new Schema({
  athlete: {
    type: Schema.Types.ObjectId,
    ref: "athlete_profiles",
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  date_completed: {
    type: Date,
  },
  review_period: {
    type: String,
    enum: ["End of Month", "End of Week", "End of Camp", "Other"],
  },
  explosive_acceleration: {
    type: Number,
    max: 5,
    min: 1,
  },
  speed_endurance: {
    type: Number,
    max: 5,
    min: 1,
  },
  transition_speed: {
    type: Number,
    max: 5,
    min: 1,
  },
  targeted_crossing: {
    type: Number,
    max: 5,
    min: 1,
  },
  playing_under_pressure: {
    type: Number,
    max: 5,
    min: 1,
  },
  Playing_between_gaps: {
    type: Number,
    max: 5,
    min: 1,
  },
  isolated_one_on_ones: {
    type: Number,
    max: 5,
    min: 1,
  },
  spatial_awareness: {
    type: Number,
    max: 5,
    min: 1,
  },
  transitions: {
    type: Number,
    max: 5,
    min: 1,
  },
  speed_of_play: {
    type: Number,
    max: 5,
    min: 1,
  },
});

const WingerOutsideBackEval = mongoose.model(
  "winger_outside_back_evals",
  WingerOutsideBackEvalSchema
);

export default WingerOutsideBackEval;
