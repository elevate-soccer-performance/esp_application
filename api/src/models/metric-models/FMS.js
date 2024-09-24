import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FMSSchema = new Schema({
  date: {
    type: Date,
  },
  impigment_clearing_test_result: {
    type: Boolean,
  },
  press_up_clearing_test_result: {
    type: Boolean,
  },
  posterior_rocking_clearing_test_result: {
    type: Boolean,
  },
  deep_squat_result: {
    type: Number,
    min: 0,
    max: 3,
  },
  hurdle_step_result: {
    type: Number,
    min: 0,
    max: 3,
  },
  inline_lunge_result: {
    type: Number,
    min: 0,
    max: 3,
  },
  active_straight_leg_raise_result: {
    type: Number,
    min: 0,
    max: 3,
  },
  trunk_stability_pushup_result: {
    type: Number,
    min: 0,
    max: 3,
  },
  rotary_statbility_result: {
    type: Number,
    min: 0,
    max: 3,
  },
});

const FMS = mongoose.model("fms", FMSSchema);

export default FMS;
