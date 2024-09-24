import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FMSSchema = new Schema({
  date: {
    type: Date,
  },
});

const FMS = mongoose.model("fms", FMSSchema);

export default FMS;
