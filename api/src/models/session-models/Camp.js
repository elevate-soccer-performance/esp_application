import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CampSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  location: {
    type: String,
  },
  coaches: [
    {
      name: {
        type: String,
      },
      id: {
        type: Schema.Types.ObjectId,
        ref: "coaches",
      },
    },
  ],
  athletes: [
    {
      name: {
        type: String,
      },
      id: {
        type: Schema.Types.ObjectId,
        ref: "athletes",
      },
    },
  ],
  // Add more informaiton on camp, including the itinerary, corresponding function focuses
});

const Camp = mongoose.model("camps", CampSchema);

export default Camp;
