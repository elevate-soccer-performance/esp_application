// Import Route Functions
import CreateCoach from "../functions/create_coach.js";
import GetCoach from "../functions/get_coach.js";
import GetCoaches from "../functions/get_coaches.js";
import UpdateCoach from "../functions/update_coach.js";
import DeleteCoach from "../functions/delete_coach.js";

// @path -> /api/v1/coach/
// @type -> POST Request
// @dec -> Create Coach Profile
export const createCoach = (req, res, next) => {
  CreateCoach(req, res, next);
};

// @path -> /api/v1/coach/:coachId
// @type -> GET Request
// @dec -> Get Coach Profile
export const getCoach = (req, res, next) => {
  GetCoach(req, res, next);
};

// @path -> /api/v1/coach/:coachId
// @type -> PUT Request
// @dec -> Update Coach Profile
export const updateCoach = (req, res, next) => {
  UpdateCoach(req, res, next);
};

// @path -> /api/v1/coach/:coachId
// @type -> DELETE Request
// @dec -> Delete Coach Profile
export const deleteCoach = (req, res, next) => {
  DeleteCoach(req, res, next);
};

// @path -> /api/v1/coach/all
// @type -> GET Request
// @dec -> Get All Coach Profile
export const getAllCoaches = (req, res, next) => {
  GetCoaches(req, res, next);
};
