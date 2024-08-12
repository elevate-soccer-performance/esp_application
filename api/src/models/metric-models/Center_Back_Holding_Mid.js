import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Center_Back_Holding_Mid_Eval_Schema = new Schema({
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
  transition_speed: {
    type: Number,
    max: 5,
    min: 1,
  },
  recovery_speed: {
    type: Number,
    max: 5,
    min: 1,
  },
  strength_vertical: {
    type: Number,
    max: 5,
    min: 1,
  },
  distribution: {
    type: Number,
    max: 5,
    min: 1,
  },
  tacking_fifty_fifty_battles: {
    type: Number,
    max: 5,
    min: 1,
  },
  first_touch: {
    type: Number,
    max: 5,
    min: 1,
  },
  composure_on_ball: {
    type: Number,
    max: 5,
    min: 1,
  },
  spatial_awareness: {
    type: Number,
    max: 5,
    min: 1,
  },
  positional_awareness: {
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

const Center_Back_Holding_Mid_Eval = mongoose.model(
  "center_back_holding_mid_evals",
  Center_Back_Holding_Mid_Eval_Schema
);

export default Center_Back_Holding_Mid_Eval;
