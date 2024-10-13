import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import FMS from "../../../models/metric-models/FMS.js";
import FTS from "../../../models/metric-models/FTS.js";
import GPA from "../../../models/metric-models/GPA.js";
import PFA from "../../../models/metric-models/PFA.js";
import CoachProfile from "../../../models/client-models/CoachProfile.js";

const MasterCreateEvaluation = asyncHandler(async (req, res, next) => {
  req.url.includes("movement")
    ? (req.body.movement_metric = req.params.movementId)
    : req.url.includes("skill")
    ? (req.body.skill_metric = req.params.skillId)
    : req.url.includes("performance")
    ? (req.body.performance_metric = req.params.performanceId)
    : req.url.includes("position")
    ? (req.body.metric = req.params.positionId)
    : null;

  // Attach Coach Id to Body
  let coach = await CoachProfile.findOne({ user: req.user._id });

  if (!coach) {
    return next(
      new ErrorResponse(
        `There was an Error Retriving Coach ID, You must be a Coach to Complete this Task`,
        403,
        "Error Coach Validation"
      )
    );
  }

  req.body.coach = coach._id;

  const field = req.url.includes("movement")
    ? await FMS.create(req.body)
    : req.url.includes("skill")
    ? await FTS.create(req.body)
    : req.url.includes("performance")
    ? await GPA.create(req.body)
    : req.url.includes("position")
    ? await PFA.create(req.body)
    : null;

  if (!field || field === null) {
    return next(
      new ErrorResponse(
        `There was an Error Creating an Evaluation`,
        500,
        "Error Evaluation Model"
      )
    );
  }

  res.status(201).json({
    success: true,
    data: field,
  });
});

export default MasterCreateEvaluation;
