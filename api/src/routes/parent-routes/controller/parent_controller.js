// Import Route Functions
import CreateParent from "../functions/create_parent.js";
import GetParent from "../functions/get_parent.js";
import GetParents from "../functions/get_all_parents.js";
import UpdateParent from "../functions/update_parent.js";

// @path -> /api/v1/parent/
// @type -> POST Request
// @dec -> Create Parent Profile
export const createParent = (req, res, next) => {
  CreateParent(req, res, next);
};

// @path -> /api/v1/parent/:parentId
// @type -> GET Request
// @dec -> Get Parent Profile
export const getParent = (req, res, next) => {
  GetParent(req, res, next);
};

// @path -> /api/v1/parent/
// @type -> GET Request
// @dec -> Get All Parent Profile
export const getParents = (req, res, next) => {
  GetParents(req, res, next);
};

// @path -> /api/v1/parent/:parentId
// @type -> PUT Request
// @dec -> Update Parent Profile
export const updateParent = (req, res, next) => {
  UpdateParent(req, res, next);
};
