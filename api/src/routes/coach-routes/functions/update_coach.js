import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import CoachProfile from "../../../models/client-models/CoachProfile.js";

const UpdateCoach = asyncHandler(async (req, res, next) => {
  // Update Coach
  const coach = await CoachProfile.findOneAndUpdate(
    { _id: req.params.coachId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!coach) {
    return next(
      new ErrorResponse(
        `There were no Coaches with the ID ${req.params.coachId}`,
        404,
        "Coach Not Found"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: trainer,
  });
});

export default UpdateCoach;
