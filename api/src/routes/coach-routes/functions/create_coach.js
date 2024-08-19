import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import CoachProfile from "../../../models/client-models/CoachProfile.js";

const CreateCoach = asyncHandler(async (req, res, next) => {
  // Add User to Body
  req.body.created_by = req.user._id;
  req.body.user = req.user.role === "Coach" ? req.user._id : "";
  console.log("USER: ", req.body.user);
  // Create Coach Profile
  const coach = await CoachProfile.create(req.body);
  //   Check for Coach
  if (!coach) {
    return next(
      new ErrorResponse(
        `There was an error creating the Coach Profile`,
        500,
        "Error Creating Profile"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: coach,
  });
});

export default CreateCoach;
