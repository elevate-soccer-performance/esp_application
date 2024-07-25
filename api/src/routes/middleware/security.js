import asyncHandler from "../../util/async.js";
import ErrorResponse from "../../util/error_response.js";
import jwt from "jsonwebtoken";
import User from "../../models/user-model/User.js";
import Athlete from "../../models/client-models/AthleteProfile.js";
import Coach from "../../models/client-models/CoachProfile.js";

// Protect Routes
// Require User to have Bearer Token
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.req.cookies.token;
  }

  // Check Token Exists
  if (!token) {
    return next(
      new ErrorResponse(`You are not Authenticated`, 401, "Auth Error")
    );
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(
      new ErrorResponse(`You are not Authenticated`, 401, "Auth Error")
    );
  }
});

// Admin Routes
// Require User to be Admin
export const admin = asyncHandler(async (req, res, next) => {
  try {
    if (req.user.admin !== true) {
      return next(
        new ErrorResponse(
          `${req.user.name} is not Authorized to access resource`,
          403,
          "Permission Denied"
        )
      );
    }
    next();
  } catch (err) {
    return next(
      new ErrorResponse(
        `There was an Error Authenticating Targeted User`,
        500,
        "Security Error"
      )
    );
  }
});

// Target User
// Require User to Belong to Resource
export const targetUser = (req, res, next) => {
  try {
    if (
      JSON.stringify(req.user._id) !== JSON.stringify(req.params.userId) &&
      req.user.admin === false
    ) {
      return next(
        new ErrorResponse(
          `You are not Authorized to access this Resource`,
          401,
          "Not Authorized"
        )
      );
    }
    next();
  } catch (err) {
    return next(
      new ErrorResponse(
        `There was an Error Authenticating Targeted User`,
        500,
        "Security Error"
      )
    );
  }
};

// User Type
// Require User to be a User Type
export const userRole = (...userRole) => {
  return (req, res, next) => {
    if (!userRole.includes(req.user.role) && !req.user.admin) {
      return next(
        new ErrorResponse(
          `${req.user.role} is not Authorized to access resource`,
          401,
          "Permission Denied"
        )
      );
    }
    next();
  };
};

// User Type Exclusion
// Exclude User Roles from Resource
export const userRoleExclusion = (...userExclusion) => {
  return (req, res, next) => {
    if (
      userExclusion.includes(req.user.role) &&
      !req.user.admin &&
      JSON.stringify(req.params.userId) !== JSON.stringify(req.user._id)
    ) {
      return next(
        new ErrorResponse(
          `${req.user.type} is not Authorized to access resource`,
          401,
          "Permission Denied"
        )
      );
    }
    next();
  };
};

// User Association
// User is Associated with Resources
export const userAssociation = (...resource) => {
  return async (req, res, next) => {
    // Check Athlete Profile for User Access
    if (resource.includes("athlete")) {
      const athlete = await Athlete.findOne({ _id: req.params.athleteId });
      let found;
      for (let person in athlete.associated_users) {
        if (
          JSON.stringify(athlete.associated_users[person].id) ===
          JSON.stringify(req.user._id)
        ) {
          found = true;
          break;
        }
      }
      if (
        !found &&
        !req.user.admin &&
        JSON.stringify(athlete.created_by) !== JSON.stringify(req.user._id) &&
        JSON.stringify(athlete.user) !== JSON.stringify(req.user._id)
      ) {
        return next(
          new ErrorResponse(
            `${req.user.name} is not Authorized to access resource`,
            401,
            "Permission Denied"
          )
        );
      }
      next();
    } // Add Additional Resources to Check Here
  };
};
