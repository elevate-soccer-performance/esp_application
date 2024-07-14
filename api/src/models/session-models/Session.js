import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SessionSchema = new Schema(
  {
    date: {
      type: Date,
    },
    time_start: {
      type: Date,
    },
    time_end: {
      type: Date,
    },
    coach: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    scheduled_athletes: [
      {
        name: {
          type: String,
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
      },
    ],
    attendance: [
      {
        name: {
          type: String,
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
      },
    ],
    location: {
      type: String,
      enum: ["Heritage", "Long Lake", "David Lorenze"],
    },
    exercises: [],
    primary_function_focus: {},
    secondary_function_focus: {},
    metric_3: {},
    metric_4: {},
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
