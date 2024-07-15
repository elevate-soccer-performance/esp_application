import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SubscriptionProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    subscription_type: {
      type: String,
      enum: ["Drop-In", "Basic"],
    },
    sessions_per_month: {
      type: Number,
    },
    additional_session_cost: {
      type: Number,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    active: {
      type: Boolean,
    },
    updated_at: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const SubscriptionProfile = mongoose.model(
  "subscription_profiles",
  SubscriptionProfileSchema
);

export default SubscriptionProfile;
