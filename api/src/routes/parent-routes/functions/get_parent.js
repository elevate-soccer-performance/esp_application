import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import ParentProfile from "../../../models/client-models/ParentProfile.js";

const GetParent = asyncHandler(async (req, res, next) => {
  const parent = await ParentProfile.findOne({ _id: req.params.parentId });

  if (!parent) {
    return next(
      new ErrorResponse(
        `There were no Parent Profiles with the ID ${req.params.parentId} Found`,
        404,
        "Not Found Parent Profile"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: parent,
  });
});

export default GetParent;
