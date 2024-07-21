// Import Route Functions
import CreateUser from "../functions/create_user.js";
import DeleteUser from "../functions/delete_user.js";
import GetUser from "../functions/get_user.js";
import GetUsers from "../functions/get_users.js";
import UpdateUser from "../functions/update_user.js";

// @path -> /api/v1/user/
// @type -> GET Request
// @dec -> Get All Users
export const getUsers = (req, res, next) => {
  GetUsers(req, res, next);
};

// @path -> /api/v1/user/:userId
// @type -> GET Request
// @dec -> Get User
export const getUser = (req, res, next) => {
  GetUser(req, res, next);
};

// @path -> /api/v1/user/
// @type -> POST Request
// @dec -> Create User
export const createUser = (req, res, next) => {
  CreateUser(req, res, next);
};

// @path -> /api/v1/user/:userId
// @type -> PUT Request
// @dec -> UpdateUser
export const updateUser = (req, res, next) => {
  UpdateUser(req, res, next);
};

// @path -> /api/v1/user/:userId
// @type -> DELETE Request
// @dec -> Delete User
export const deleteUser = (req, res, next) => {
  DeleteUser(req, res, next);
};
