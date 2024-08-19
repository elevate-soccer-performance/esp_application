import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import FunctionMetric from "../../../models/metric-models/FunctionMetric.js";

const CreateFunctionMetric = asyncHandler(async (req, res, next) => {
  const function_metric = await FunctionMetric.create(req.body);

  if (!function_metric) {
    return next(
      new ErrorResponse(
        `There was an Error Creating the Function Metric`,
        500,
        "Error Creating Metric"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: function_metric,
  });
});

export default CreateFunctionMetric;
