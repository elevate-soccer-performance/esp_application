// Import Route Functions
import CreateParent from "../functions/create_parent.js";

// @path -> /api/v1/parent/
// @type -> POST Request
// @dec -> Create Parent Profile
export const createParent = (req, res, next) => {
  CreateParent(req, res, next);
};

// @path -> /api/v1/parent/:parentId
// @type -> GET Request
// @dec -> Get Parent Profile
export const getParent = (req, res, next) => {};
