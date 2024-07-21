import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Tell us your name!"],
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
    phone_number: {
      unique: true,
      type: String,
      required: [true, "Please add your phone number"],
    },
    password: {
      type: String,
      required: [true, "Please Create a Password"],
      select: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["Coach", "Athlete", "Parent"],
    },
    package: {
      type: String,
      enum: ["Subscription", "Drop-in Rate"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    OTPAttemptToken: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Encrypt User Password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Match User Password
UserSchema.methods.matchPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Sign JWT Token to Log the User In
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Generate Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash Token & Set to Field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set Expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // Ten Minutes

  return resetToken;
};

// Reverse Populate to get User Profile
UserSchema.virtual("profile", {
  ref: (doc) => `${doc.role.toLowerCase()}_profiles`,
  localField: "_id",
  foreignField: "user",
  justOne: true,
});

const User = mongoose.model("users", UserSchema);

export default User;
