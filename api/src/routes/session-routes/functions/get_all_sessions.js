import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import Session from "../../../models/session-models/Session.js";
import AthleteProfile from "../../../models/client-models/AthleteProfile.js";

const GetAllSessions = asyncHandler(async (req, res, next) => {
  // Filter User Role
  // Admin Requests are handled in admin_get_all_sessions
  // Coach Requests are handled in coach_get_all_sessions
  if (req.user.role === "Athlete") {
    // User is Athlete
    // Get Athlete Profile
    const athlete = await AthleteProfile.findOne({ user: req.user._id });
    if (!athlete) {
      return next(
        new ErrorResponse(
          `There was an Error Getting your Athlete Profile ID`,
          500,
          "Athlete Profile Error"
        )
      );
    }

    let sessions;

    // Get Sessions that have Athlete Profile ID
    // Get Sessions the Athlete is Scheduled for
    sessions.scheduled_sessions = await Session.find({
      "scheduled_athletes.athlete": athlete._id,
    });
    // Get Sessions that the Athlete has Attended
    sessions.attended_sessions = await Session.find({
      "attendance.athlete": athlete._id,
    });

    res.status(200).json({
      success: true,
      data: sessions,
    });
  } else if (req.user.role === "Parent") {
  }
});

export default GetAllSessions;
