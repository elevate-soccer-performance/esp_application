import asyncHandler from "../../../util/async.js";
import Session from "../../../models/session-models/Session.js";
import AthleteAttendance from "../../../models/session-models/AthleteAttendance.js";
import ErrorResponse from "../../../util/error_response.js";

const UpdateAthleteAttendance = asyncHandler(async (req, res, next) => {
  const athlete_attendance = await AthleteAttendance.findOneAndUpdate(
    { _id: req.body.attendanceId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!athlete_attendance) {
    return next(
      new ErrorResponse(
        `There was an Error Updating Athlete Attendance for the Session ID ${req.params.sessionId} and Athlete Attendance ID ${req.params.attendanceId}`,
        500,
        "Attendance Error Update"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: athlete_attendance,
  });
});

export default UpdateAthleteAttendance;
