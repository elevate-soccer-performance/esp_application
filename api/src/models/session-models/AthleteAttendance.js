import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AthleteAttendanceSchema = new Schema({
  athlete: {
    type: Schema.Types.ObjectId,
    ref: "athletes",
  },
  session: {
    type: Schema.Types.ObjectId,
    ref: "sessions",
  },
  status: {
    type: String,
    enum: ["Scheduled", "Present", "Absent", "Excused", "Canceled"],
  },
});

const AthleteAttendance = mongoose.model(
  "athlete_attendances",
  AthleteAttendanceSchema
);

export default AthleteAttendance;
