import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import MovementMetric from "../../../models/metric-models/MovementMetric.js";
import PerformanceMetric from "../../../models/metric-models/PerformanceMetric.js";
import PositionFunctionMetric from "../../../models/metric-models/PositionFunctionMetric.js";
import SkillMetric from "../../../models/metric-models/SkillMetric.js";

const MasterUpdateMetric = asyncHandler(async (req, res, next) => {
  const field = req.url.includes("movement")
    ? await MovementMetric.findByIdAndUpdate(
        { _id: req.params.movementId },
        req.body,
        { new: true, runValidators: true }
      )
    : req.url.includes("skill")
    ? await SkillMetric.findByIdAndUpdate(
        { _id: req.params.skillId },
        req.body,
        { new: true, runValidators: true }
      )
    : req.url.includes("performance")
    ? await PerformanceMetric.findByIdAndUpdate(
        { _id: req.params.performanceId },
        req.body,
        { new: true, runValidators: true }
      )
    : req.url.includes("position")
    ? await PositionFunctionMetric.findByIdAndUpdate(
        { _id: req.params.positionId },
        req.body,
        { new: true, runValidators: true }
      )
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Updating Metric`,
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

export default MasterUpdateMetric;
