import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    athlete_name: {
      type: String,
    },
    club_level: {
      type: String,
      enum: ["EAL", "ECRL", "ECNL", "MLS-Next", "Other"],
    },
    athlete_year: {
      type: String,
    },
    parent_name: {
      type: String,
    },
    phone: {
      unique: true,
      type: String,
      required: [true, "Please add your phone number"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    status: {
      type: String,
      enum: ["Active", "In-Active"],
    },
    athlete_dob: {
      type: Date,
    },
    assigned_user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("clients", ClientSchema);

export default Client;
