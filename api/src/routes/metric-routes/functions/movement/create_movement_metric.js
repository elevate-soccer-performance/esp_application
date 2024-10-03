import asyncHandler from "../../../../util/async.js";
import ErrorResponse from "../../../../util/error_response.js";
import MovementMetric from "../../../../models/metric-models/MovementMetric.js";

const CreateMovementMetric = asyncHandler(async (req, res, next) => {
  const Movement = await MovementMetric.create(req.body);

  if (!Movement) {
    return next(
      new ErrorResponse(
        `There was a error creating the Movement Metric`,
        500,
        "Model Error"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: Movement,
  });
});

export default CreateMovementMetric;
