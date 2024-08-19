import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ResultFunctionMetricSchema = new Schema(
  {
    athlete: {
      type: Schema.Types.ObjectId,
      ref: "athletes",
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    coach: {
      type: Schema.Types.ObjectId,
      ref: "coaches",
    },
    function: {
      type: Schema.Types.ObjectId,
      ref: "function_metrics",
    },
    value: {
      type: Number,
      max: 5,
      min: 1,
    },
    date: {
      type: Date,
    },
    note: {
      type: String,
    },
    result_type: {
      type: String,
      enum: ["Session", "Game", "Camp", "Periodic", "Other"],
    },
    session_id: {
      type: Schema.Types.ObjectId,
      ref: "sessions",
    },
  },
  {
    timestamps: true,
  }
);

const ResultFunctionMetric = mongoose.model(
  "result_function_metrics",
  ResultFunctionMetricSchema
);

export default ResultFunctionMetric;
