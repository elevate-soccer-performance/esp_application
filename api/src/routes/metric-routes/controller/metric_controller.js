// Import Route Functions

// --------------------------------------------------
// Start Movement Metric Management

// @path -> /api/v1/metric/movement
// @type -> POST Request
// @dec -> Create Movement Metric to be Tracked (NOT Athlete Evaluation)
export const createMovementMetric = (req, res, next) => {};

// @path -> /api/v1/metric/movement/:movementId
// @type -> POST Request
// @dec -> Create Movement Evaluation for an Athlete (This is the scored evaluation of that metric for an athlete)
export const createMovementEvaluation = (req, res, next) => {};

// @path -> /api/v1/metric/movement/:movementId
// @type -> GET Request
// @dec -> Get Movement Metric (Not Athlete Evaluation)
export const getMovementMetric = (req, res, next) => {};

// @path -> /api/v1/metric/movement/:movementId
// @type -> PUT Request
// @dec -> Update Movement Metric (Not Athlete Evaluation)
export const updateMovementMetric = (req, res, next) => {};

// @path -> /api/v1/metric/movement/fms/:userId/:evaluationId
// @type -> PUT Request
// @dec -> Update Athlete Evaluation of Movement Metric for the FMS
export const updateMovementEvaluation = (req, res, next) => {};

// @path -> /api/v1/metric/movement/fms/:userId/:evaluationId
// @type -> GET Request
// @dec -> Get Movement Evaluation for Athlete Score
export const getMovementEvaluation = (req, res, next) => {};

// @path -> /api/v1/metric/movement
// @type -> GET Request
// @dec -> Get All Movement Metrics (Not Athlete Results or Evaluations)
export const getMovementMetrics = (req, res, next) => {};

// @path -> /api/v1/metric/movement/:movementId
// @type -> DELETE Request
// @dec -> Delete Movement Metric (Not Athlete Evaluation)
export const deleteMovementMetric = (req, res, next) => {};

// @path -> /api/v1/metric/movement/fms/:userId/:evaluationId
// @type -> DELETE Request
// @dec ->Delete Movement Evaluation for Athlete
export const deleteMovementEvaluation = (req, res, next) => {};

// End Movement Metric Management
// --------------------------------------------------
// Start Skill Metric Management

// @path -> /api/v1/metric/skill/
// @type -> POST Request
// @dec -> Create Skill Metric (Not Athlete Evaluation)
export const createSkillMetric = (req, res, next) => {};

// @path -> /api/v1/metric/skill/
// @type -> GET Request
// @dec -> Get All Skill Metrics (Not Athlete Evaluations or Results)
export const getSkillMetrics = (req, res, next) => {};

// @path -> /api/v1/metric/performance
// @type -> POST Request
// @dec -> Create Performance Metric
