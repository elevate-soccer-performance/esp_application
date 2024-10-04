import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import MovementMetric from "../../../models/metric-models/MovementMetric.js";
import PerformanceMetric from "../../../models/metric-models/PerformanceMetric.js";
import PositionFunctionMetric from "../../../models/metric-models/PositionFunctionMetric.js";
import SkillMetric from "../../../models/metric-models/SkillMetric.js";

const MasterGetMetrics = asyncHandler(async (req, res, next) => {
  const field = req.url.includes("movement")
    ? await MovementMetric.find()
    : req.url.includes("skill")
    ? SkillMetric.find()
    : req.url.includes("performance")
    ? PerformanceMetric.find()
    : req.url.includes("position")
    ? PositionFunctionMetric.find()
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Retrieving Metrics`,
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

export default MasterGetMetrics;
