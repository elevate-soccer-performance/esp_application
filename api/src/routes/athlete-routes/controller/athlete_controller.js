// Import Route Functions
import CreateAthlete from "../functions/create_athlete.js";
import GetAthlete from "../functions/get_athlete.js";
import UpdateAthlete from "../functions/update_athlete.js";
import DeleteAthlete from "../functions/delete_athlete.js";
import GetAthletes from "../functions/get_athletes.js";

// @path -> /api/v1/athlete/
// @type -> POST Request
// @dec -> Create Athlete
export const createAthlete = (req, res, next) => {
  CreateAthlete(req, res, next);
};

// @path -> /api/v1/athlete/
// @type -> GET Request
// @dec -> Get Athlete Profile
export const getAthlete = (req, res, next) => {
  GetAthlete(req, res, next);
};

// @path -> /api/v1/athlete/
// @type -> PUT Request
// @dec -> Update Athlete Profile
export const updateAthlete = (req, res, next) => {
  UpdateAthlete(req, res, next);
};

// @path -> /api/v1/athlete/:athleteId
// @type -> DELETE Request
// @dec -> Delete Athlete Profile
export const deleteAthlete = (req, res, next) => {
  DeleteAthlete(req, res, next);
};

// @path -> /api/v1/athlete/all
// @type -> GET Request
// @dec -> Get All Athlete Profiles
export const getAllAthletes = (req, res, next) => {
  GetAthletes(req, res, next);
};
