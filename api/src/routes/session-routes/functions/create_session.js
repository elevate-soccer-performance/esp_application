import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import Session from "../../../models/session-models/Session.js";
import AthleteAttendance from "../../../models/session-models/AthleteAttendance.js";

const CreateSession = asyncHandler(async (req, res, next) => {
  // Add User to Body
  req.body.created_by = req.user._id;

  const session = await Session.create(req.body);

  if (!session) {
    return next(
      new ErrorResponse(
        `There was an Error Creating the Session`,
        500,
        "Creating Session Error"
      )
    );
  }

  // Create Attendance docs per athlete scheduled
  session.scheduled_athletes.map(async (athlete) => {
    await AthleteAttendance.create({
      athlete: athlete._id,
      session: session._id,
      status: "Scheduled",
    });
  });

  res.status(201).json({
    success: true,
    data: session,
  });
});

export default CreateSession;
