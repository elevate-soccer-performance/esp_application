import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import PerformanceMetric from "../../../models/metric-models/PerformanceMetric.js";

const CreatePerformanceMetric = asyncHandler(async (req, res, next) => {
  const performance_metric = await PerformanceMetric.create(req.body);

  if (!performance_metric) {
    return next(
      new ErrorResponse(
        `There was an Error Creating the Performance Metric`,
        500,
        "Error Creating Metric"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: performance_metric,
  });
});

export default CreatePerformanceMetric;
