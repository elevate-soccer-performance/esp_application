import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import FunctionMetric from "../../../models/metric-models/FunctionMetric.js";
import ResultFunctionMetric from "../../../models/metric-models/ResultFunctionMetric.js";
import Session from "../../../models/session-models/Session.js";
import CoachProfile from "../../../models/client-models/CoachProfile.js";

const CreateResultFunctionMetric = asyncHandler(async (req, res, next) => {
  // Get Coach ID Function
  const getCoachId = async () => {
    let coach = await CoachProfile.findOne({ user: req.user._id });

    return coach._id;
  };
  // Validate Function ID
  const function_metric = await FunctionMetric.findOne({
    _id: req.params.functionId,
  });
  if (!function_metric) {
    return next(
      new ErrorResponse(
        `There were no Function Metrics with the ID ${req.params.functionId}`,
        404,
        "Not Found Function Metric"
      )
    );
  }
  // Add Function Metric ID to body
  req.body.function = req.params.functionId;
  req.body.created_by = req.user._id;
  req.body.coach = req.user.role === "Coach" ? await getCoachId() : "";
  //   NEED TO COMPLETE ADDING SESSION ID VALUE TO BODY
  req.body.session_id;
  const result_metric = await ResultFunctionMetric.create(req.body);

  if (!result_metric) {
    return next(
      new ErrorResponse(
        `There was an Error Creating the Metric Result for the Funciton ${function_metric.name}`,
        500,
        "Error Creating Metric Result"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: result_metric,
  });
});

export default CreateResultFunctionMetric;
