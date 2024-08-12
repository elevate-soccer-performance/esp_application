// Import Route Functions
import CreateSession from "../functions/create_session.js";

// @path -> /api/v1/session/
// @type -> POST Request
// @dec -> Create Session
export const createSession = (req, res, next) => {
  CreateSession(req, res, next);
};
