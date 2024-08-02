import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import CoachProfile from "../../../models/client-models/CoachProfile.js";

const DeleteCoach = asyncHandler(async (req, res, next) => {
  // Find Coach & Delete
  const coach = await CoachProfile.findOne({ _id: req.params.coachId });

  if (!coach) {
    return next(
      new ErrorResponse(
        `There were no Coaches found with the ID ${req.params.coachId}`,
        404,
        "Coach Not Found"
      )
    );
  }

  await coach.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});

export default DeleteCoach;
