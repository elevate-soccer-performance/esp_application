import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import ParentProfile from "../../../models/client-models/ParentProfile.js";

const CreateParent = asyncHandler(async (req, res, next) => {
  // Add User ID to body.user
  req.body.user = req.user.role === "Parent" ? req.user._id : null;
  // Add User ID to Body for Created By
  req.body.created_by = req.user._id;

  // Create Parent
  const parent = await ParentProfile.create(req.body);

  if (!parent) {
    return next(
      new ErrorResponse(
        `There was an Error Creating the Parent Profile`,
        500,
        "Error Creating Parent Profile"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: parent,
  });
});

export default CreateParent;
