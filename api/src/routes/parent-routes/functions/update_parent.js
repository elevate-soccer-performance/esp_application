import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import ParentProfile from "../../../models/client-models/ParentProfile.js";

const UpdateParent = asyncHandler(async (req, res, next) => {
  const parent = await ParentProfile.findOneAndUpdate(
    { _id: req.params.parentId },
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );

  if (!parent) {
    return next(
      new ErrorResponse(
        `There was an Error Updating Parent Profile`,
        500,
        "Error Updating Profile"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: parent,
  });
});

export default UpdateParent;
