import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import ParentProfile from "../../../models/client-models/ParentProfile.js";

const GetParents = asyncHandler(async (req, res, next) => {
  const parents = await ParentProfile.find();

  res.status(200).json({
    success: true,
    data: parents,
  });
});

export default GetParents;
