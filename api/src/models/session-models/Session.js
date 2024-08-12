import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SessionSchema = new Schema(
  {
    date: {
      type: Date,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    time_start: {
      type: String,
    },
    time_end: {
      type: String,
    },
    coach: {
      type: Schema.Types.ObjectId,
      ref: "coaches",
    },
    scheduled_athletes: [
      {
        name: {
          type: String,
        },
        athlete: {
          type: Schema.Types.ObjectId,
          ref: "athletes",
        },
      },
    ],
    attendance: [
      {
        name: {
          type: String,
        },
        athlete: {
          type: Schema.Types.ObjectId,
          ref: "athletes",
        },
      },
    ],
    location: {
      type: String,
      enum: ["Heritage", "Long Lake", "David Lorenze"],
    },
    exercises: [
      {
        name: String,
        id: {
          type: Schema.Types.ObjectId,
          ref: "exercises",
        },
      },
    ],
    primary_function_focus: {
      type: Schema.Types.ObjectId,
      ref: "function_metrics",
    },
    secondary_function_focus: {
      type: Schema.Types.ObjectId,
      ref: "function_metrics",
    },
    metric_3: {
      type: Schema.Types.ObjectId,
      ref: "function_metrics",
    },
    metric_4: {
      type: Schema.Types.ObjectId,
      ref: "function_metrics",
    },
    session_type: {
      type: String,
      enum: ["Recovery", "In-Season", "Pre-Season", "Pre-Game", "Camp"],
    },
    session_status: {
      type: String,
      enum: ["Scheduled", "Canceled", "Completed"],
      default: "Scheduled",
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("sessions", SessionSchema);

export default Session;
