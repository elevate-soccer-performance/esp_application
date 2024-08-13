import asyncHandler from "../../../util/async.js";
import Session from "../../../models/session-models/Session.js";
import ErrorResponse from "../../../util/error_response.js";

const UpdateSession = asyncHandler(async (req, res, next) => {
  const session = await Session.findOneAndUpdate(
    { _id: req.params.sessionId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!session) {
    return next(
      new ErrorResponse(
        `There was an Error Updating the Session with the ID ${req.params.sessionId}`,
        500,
        "Session Error Update"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: session,
  });
});

export default UpdateSession;
