import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  athlete_name: {
    type: String,
  },
  parent_name: {
    type: String,
  },
  phone: {},
  email: {},
  athlete_dob: {},
});

const Client = mongoose.model("clients", ClientSchema);

export default Client;
