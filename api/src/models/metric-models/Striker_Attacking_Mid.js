import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StrikerAttackingMidEvalSchema = new Schema({
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
  top_speed: {
    type: Number,
    max: 5,
    min: 1,
  },
  multi_directional_speed: {
    type: Number,
    max: 5,
    min: 1,
  },
  core_total_strength: {
    type: Number,
    max: 5,
    min: 1,
  },
  finishing: {
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
  checking_back_to_receive_ball: {
    type: Number,
    max: 5,
    min: 1,
  },
  spatial_awareness: {
    type: Number,
    max: 5,
    min: 1,
  },
  timing_of_runs: {
    type: Number,
    max: 5,
    min: 1,
  },
  game_tempo_speed_of_play: {
    type: Number,
    max: 5,
    min: 1,
  },
});

const StrikerAttackingMidEval = mongoose.model(
  "striker_attacking_mid_evals",
  StrikerAttackingMidEvalSchema
);

export default StrikerAttackingMidEval;
