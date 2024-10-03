import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import MovementMetric from "../../../models/metric-models/MovementMetric.js";
import PerformanceMetric from "../../../models/metric-models/PerformanceMetric.js";
import SkillMetric from "../../../models/metric-models/SkillMetric.js";
import PositionFunctionMetric from "../../../models/metric-models/PositionFunctionMetric.js";

const MasterCreateMetric = asyncHandler(async (req, res, next) => {
  const field = req.url.includes("movement")
    ? await MovementMetric.create(req.body)
    : req.url.includes("skill")
    ? await SkillMetric.create(req.body)
    : req.url.includes("performance")
    ? await PerformanceMetric.create(req.body)
    : req.url.includes("position")
    ? await PositionFunctionMetric.create(req.body)
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Creating Metric Model`,
        500,
        "Error Creating Metric"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: field,
  });
});

export default MasterCreateMetric;
