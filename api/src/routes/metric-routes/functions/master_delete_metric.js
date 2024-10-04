import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import MovementMetric from "../../../models/metric-models/MovementMetric.js";
import PerformanceMetric from "../../../models/metric-models/PerformanceMetric.js";
import PositionFunctionMetric from "../../../models/metric-models/PositionFunctionMetric.js";
import SkillMetric from "../../../models/metric-models/SkillMetric.js";

const MasterDeleteMetric = asyncHandler(async (req, res, next) => {
  const field = req.url.includes("movement")
    ? await MovementMetric.findOne({ _id: req.params.movementId })
    : req.url.includes("skill")
    ? SkillMetric.findOne({ _id: req.params.skillId })
    : req.url.includes("performance")
    ? PerformanceMetric.findOne({ _id: req.params.performanceId })
    : req.url.includes("position")
    ? PositionFunctionMetric.findOne({ _id: req.params.positionId })
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Deleting Metric`,
        500,
        "Error with Model"
      )
    );
  }

  await field.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});

export default MasterDeleteMetric;
