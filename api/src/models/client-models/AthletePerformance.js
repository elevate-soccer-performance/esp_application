import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AthletePerformanceSchema = new Schema({
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

const AthletePerformance = mongoose.model(
  "athlete_performances",
  AthletePerformanceSchema
);

export default AthletePerformance;
