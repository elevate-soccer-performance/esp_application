import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import FMS from "../../../models/metric-models/FMS.js";
import FTS from "../../../models/metric-models/FTS.js";
import GPA from "../../../models/metric-models/GPA.js";
import PFA from "../../../models/metric-models/PFA.js";

const MasterUpdateEvaluation = asyncHandler(async (req, res, next) => {
  const field = req.url.includes("fms")
    ? await FMS.findByIdAndUpdate({ _id: req.params.evaluationId }, req.body, {
        new: true,
        runValidators: true,
      })
    : req.url.includes("fts")
    ? await FTS.findByIdAndUpdate(req.params.evaluationId, req.body, {
        new: true,
        runValidators: true,
      })
    : req.url.includes("gpa")
    ? await GPA.findByIdAndUpdate(req.params.evaluationId, req.body, {
        new: true,
        runValidators: true,
      })
    : req.url.includes("pfa")
    ? await PFA.findByIdAndUpdate(req.params.evaluationId, req.body, {
        new: true,
        runValidators: true,
      })
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Updating Evaluation`,
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

export default MasterUpdateEvaluation;
