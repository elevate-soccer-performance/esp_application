import asyncHandler from "../../../../util/async.js";
import ErrorResponse from "../../../../util/error_response.js";
import FMS from "../../../../models/metric-models/FMS.js";

const CreateMovementEvaluation = asyncHandler(async (req, res, next) => {
  // Add Movement Metric to Body
  req.body.movement_metric = req.params.movementId;

  const fms = await FMS.create(req.body);

  if (!fms) {
    return next(
      new ErrorResponse(
        `There was an Error Creating the Movement Evaluation`,
        500,
        "Model Error"
      )
    );
  }

  res.status(201).json({ success: true, data: fms });
});

export default CreateMovementEvaluation;
