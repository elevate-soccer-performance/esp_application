import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import MovementMetric from "../../../models/metric-models/MovementMetric.js";
import PerformanceMetric from "../../../models/metric-models/PerformanceMetric.js";
import PositionFunctionMetric from "../../../models/metric-models/PositionFunctionMetric.js";
import SkillMetric from "../../../models/metric-models/SkillMetric.js";

const MasterGetMetric = asyncHandler(async (req, res, next) => {
  const field = req.url.includes("movement")
    ? await MovementMetric.findById({ _id: req.params.movementId })
    : req.url.includes("skill")
    ? SkillMetric.findById({ _id: req.params.skillId })
    : req.url.includes("performance")
    ? PerformanceMetric.findById({ _id: req.params.performanceId })
    : req.url.includes("position")
    ? PositionFunctionMetric.findById({ _id: req.params.positionId })
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Retrieving Metric`,
        500,
        "Error with Model"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: field,
  });
});

export default MasterGetMetric;
