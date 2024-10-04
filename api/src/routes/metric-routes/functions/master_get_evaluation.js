import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import FMS from "../../../models/metric-models/FMS.js";
import FTS from "../../../models/metric-models/FTS.js";
import GPA from "../../../models/metric-models/GPA.js";
import PFA from "../../../models/metric-models/PFA.js";

const MasterGetEvaluation = asyncHandler(async (req, res, next) => {
  const field = req.url.includes("fms")
    ? await FMS.findById(req.params.evaluationId)
    : req.url.includes("fts")
    ? await FTS.findById(req.params.evaluationId)
    : req.url.includes("gpa")
    ? await GPA.findById(req.params.evaluationId)
    : req.url.includes("pfa")
    ? await PFA.findById(req.params.evaluationId)
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Returning Evaluation`,
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

export default MasterGetEvaluation;
