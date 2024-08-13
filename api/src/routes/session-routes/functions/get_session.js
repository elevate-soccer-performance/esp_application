import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import Session from "../../../models/session-models/Session.js";

const GetSession = asyncHandler(async (req, res, next) => {
  const session = await Session.findOne({ _id: req.params.sessionId });

  if (!session) {
    return next(
      new ErrorResponse(
        `There were no Sessions found with the ID ${req.params.sessionId}`,
        404,
        "Not Found Session"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: session,
  });
});

export default GetSession;
