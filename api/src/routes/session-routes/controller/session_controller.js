// Import Route Functions
import CreateSession from "../functions/create_session.js";
import UpdateSession from "../functions/update_session.js";
import UpdateAthleteAttendance from "../functions/update_athlete_attendance.js";
import GetSession from "../functions/get_session.js";

// @path -> /api/v1/session/
// @type -> POST Request
// @dec -> Create Session
export const createSession = (req, res, next) => {
  CreateSession(req, res, next);
};

// @path -> /api/v1/session/:sessionId
// @type -> PUT Request
// @dec -> Update Session
export const updateSession = (req, res, next) => {
  UpdateSession(req, res, next);
};

// @path -> /api/v1/session/:sessionId/athlete/attendance
// @type -> PUT Request
// @dec -> Update Athlete Attendance
export const updateAthleteAttendance = (req, res, next) => {
  UpdateAthleteAttendance(req, res, next);
};

// @path -> /api/v1/session/:sessionId
// @type -> GET Request
// @dec -> Get Session
export const getSession = (req, res, next) => {
  GetSession(req, res, next);
};
