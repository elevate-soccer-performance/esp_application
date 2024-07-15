import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AthleteFunctionSchema = new Schema({
  athlete: {
    type: Schema.Types.ObjectId,
    ref: "athletes",
  },
  date: {
    type: Date,
  },
  metric: {
    name: {
      type: String,
    },
    id: {
      type: Schema.Types.ObjectId,
      ref: "function_metrics",
    },
  },
  value: {
    type: Number,
    min: 0,
    max: 5,
  },
  assessment_type: {
    type: String,
    enum: ["Session", "Camp", "End of Month"],
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const AthleteFunction = mongoose.model(
  "athlete_functions",
  AthleteFunctionSchema
);

export default AthleteFunction;
