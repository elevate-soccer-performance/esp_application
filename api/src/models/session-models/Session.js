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
    trainer: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    athletes: [
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
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("sessions", SessionSchema);

export default Session;
