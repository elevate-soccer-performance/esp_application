import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  instructions: {
    type: String,
  },
  session_phase: {
    type: String,
    enum: ["Dynamic", "Isolation", "Develop", "Implementation"],
  },
  goal: {
    type: String,
  },
});

const Exercise = mongoose.model("exercises", ExerciseSchema);

export default Exercise;
