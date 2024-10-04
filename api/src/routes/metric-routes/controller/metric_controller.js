// Import Route Functions
import MasterCreateMetric from "../functions/master_create_metric.js";
import MasterCreateEvaluation from "../functions/master_create_evaluation.js";
import MasterGetMetrics from "../functions/master_get_metrics.js";
import MasterGetMetric from "../functions/master_get_metric.js";
import MasterUpdateMetric from "../functions/master_update_metric.js";
import MasterGetEvaluation from "../functions/master_get_evaluation.js";
import MasterUpdateEvaluation from "../functions/master_update_evaluation.js";
import MasterDeleteMetric from "../functions/master_delete_metric.js";
import MasterDeleteEvaluation from "../functions/master_delete_evaluation.js";

// --------------------------------------------------
// Start Movement Metric Management

// @path -> /api/v1/metric/movement
// @type -> POST Request
// @dec -> Create Movement Metric to be Tracked (NOT Athlete Evaluation)
export const createMovementMetric = (req, res, next) => {
  MasterCreateMetric(req, res, next);
};

// @path -> /api/v1/metric/movement/:movementId
// @type -> POST Request
// @dec -> Create Movement Evaluation for an Athlete (This is the scored evaluation of that metric for an athlete)
export const createMovementEvaluation = (req, res, next) => {
  MasterCreateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/movement/:movementId
// @type -> GET Request
// @dec -> Get Movement Metric (Not Athlete Evaluation)
export const getMovementMetric = (req, res, next) => {
  MasterGetMetric(req, res, next);
};

// @path -> /api/v1/metric/movement/:movementId
// @type -> PUT Request
// @dec -> Update Movement Metric (Not Athlete Evaluation)
export const updateMovementMetric = (req, res, next) => {
  MasterUpdateMetric(req, res, next);
};

// @path -> /api/v1/metric/movement/fms/:userId/:evaluationId
// @type -> PUT Request
// @dec -> Update Athlete Evaluation of Movement Metric for the FMS
export const updateMovementEvaluation = (req, res, next) => {
  MasterUpdateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/movement/fms/:userId/:evaluationId
// @type -> GET Request
// @dec -> Get Movement Evaluation for Athlete Score
export const getMovementEvaluation = (req, res, next) => {
  MasterGetEvaluation(req, res, next);
};

// @path -> /api/v1/metric/movement
// @type -> GET Request
// @dec -> Get All Movement Metrics (Not Athlete Results or Evaluations)
export const getMovementMetrics = (req, res, next) => {
  MasterGetMetrics(req, res, next);
};

// @path -> /api/v1/metric/movement/:movementId
// @type -> DELETE Request
// @dec -> Delete Movement Metric (Not Athlete Evaluation)
export const deleteMovementMetric = (req, res, next) => {
  MasterDeleteMetric(req, res, next);
};

// @path -> /api/v1/metric/movement/fms/:userId/:evaluationId
// @type -> DELETE Request
// @dec ->Delete Movement Evaluation for Athlete
export const deleteMovementEvaluation = (req, res, next) => {
  MasterDeleteEvaluation(req, res, next);
};

// End Movement Metric Management
// --------------------------------------------------
// Start Skill Metric Management

// @path -> /api/v1/metric/skill/
// @type -> POST Request
// @dec -> Create Skill Metric (Not Athlete Evaluation)
export const createSkillMetric = (req, res, next) => {
  MasterCreateMetric(req, res, next);
};

// @path -> /api/v1/metric/skill/
// @type -> GET Request
// @dec -> Get All Skill Metrics (Not Athlete Evaluations or Results)
export const getSkillMetrics = (req, res, next) => {
  MasterGetMetrics(req, res, next);
};

// @path -> /api/v1/metric/skill/:skillId
// @type -> POST Request
// @dec -> Create Skill Evaluation (FTS) for an Athelte
export const createSkillEvaluation = (req, res, next) => {
  MasterCreateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/skill/:skillId
// @type -> GET Request
// @dec -> Get Skill Metric (Not Athlete Evaluation)
export const getSkillMetric = (req, res, next) => {
  MasterGetMetric(req, res, next);
};

// @path -> /api/v1/metric/skill/:skillId
// @type -> PUT Request
// @dec -> Update Skill Metric (Not Athlete Evaluation)
export const updateSkillMetric = (req, res, next) => {
  MasterUpdateMetric(req, res, next);
};

// @path -> /api/v1/metric/skill/
// @type -> DELETE Request
// @dec -> Delete Skill Metric (Not Athlete Evaluation)
export const deleteSkillMetric = (req, res, next) => {
  MasterDeleteMetric(req, res, next);
};

// @path -> /api/v1/metric/skill/fts/:userId/:evaluationId
// @type -> PUT Request
// @dec -> Update Skill Evaluation for an Athlete
export const updateSkillEvaluation = (req, res, next) => {
  MasterUpdateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/skill/fts/:userId/:evaluationId
// @type -> GET Request
// @dec -> Get Skill Evaluation for an Athlete
export const getSkillEvaluation = (req, res, next) => {
  MasterGetEvaluation(req, res, next);
};

// @path -> /api/v1/metric/skill/fts/:userId/:evaluationId
// @type -> DELETE Request
// @dec -> Delete Skill Evaluation for an Athlete
export const deleteSkillEvaluation = (req, res, next) => {
  MasterDeleteEvaluation(req, res, next);
};

// End Skill Metric Management
// --------------------------------------------------
// Start Performance Metric Management

// @path -> /api/v1/metric/performance/
// @type -> POST Request
// @dec -> Create performance Metric (Not Athlete Evaluation)
export const createPerformanceMetric = (req, res, next) => {
  MasterCreateMetric(req, res, next);
};

// @path -> /api/v1/metric/performance/
// @type -> GET Request
// @dec -> Get All Performance Metrics (Not Athlete Evaluations or Results)
export const getPerformanceMetrics = (req, res, next) => {
  MasterGetMetrics(req, res, next);
};

// @path -> /api/v1/metric/performance/:performanceId
// @type -> POST Request
// @dec -> Create Performance Evaluation (GPA) for an Athelte
export const createPerformanceEvaluation = (req, res, next) => {
  MasterCreateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/performance/:performanceId
// @type -> GET Request
// @dec -> Get Performance Metric (Not Athlete Evaluation)
export const getPerformanceMetric = (req, res, next) => {
  MasterGetMetric(req, res, next);
};

// @path -> /api/v1/metric/performance/:performanceId
// @type -> PUT Request
// @dec -> Update Performance Metric (Not Athlete Evaluation)
export const updatePerformanceMetric = (req, res, next) => {
  MasterUpdateMetric(req, res, next);
};

// @path -> /api/v1/metric/performance/
// @type -> DELETE Request
// @dec -> Delete Performance Metric (Not Athlete Evaluation)
export const deletePerformanceMetric = (req, res, next) => {
  MasterDeleteMetric(req, res, next);
};

// @path -> /api/v1/metric/performance/gpa/:userId/:evaluationId
// @type -> PUT Request
// @dec -> Update Performance Evaluation for an Athlete
export const updatePerformanceEvaluation = (req, res, next) => {
  MasterUpdateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/performance/gpa/:userId/:evaluationId
// @type -> GET Request
// @dec -> Get Performance Evaluation for an Athlete
export const getPerformanceEvaluation = (req, res, next) => {
  MasterGetEvaluation(req, res, next);
};

// @path -> /api/v1/metric/performance/gpa/:userId/:evaluationId
// @type -> DELETE Request
// @dec -> Delete Performance Evaluation for an Athlete
export const deletePerformanceEvaluation = (req, res, next) => {
  MasterDeleteEvaluation(req, res, next);
};

// End Performance Metric Management
// --------------------------------------------------
// Start Position Metric Management

// @path -> /api/v1/metric/position/
// @type -> POST Request
// @dec -> Create Position Metric (Not Athlete Evaluation)
export const createPositionMetric = (req, res, next) => {
  MasterCreateMetric(req, res, next);
};

// @path -> /api/v1/metric/position/
// @type -> GET Request
// @dec -> Get All Position Metrics (Not Athlete Evaluations or Results)
export const getPositionMetrics = (req, res, next) => {
  MasterGetMetrics(req, res, next);
};

// @path -> /api/v1/metric/position/:positionId
// @type -> POST Request
// @dec -> Create Position Evaluation (PFA) for an Athelte
export const createPositionEvaluation = (req, res, next) => {
  MasterCreateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/position/:positionId
// @type -> GET Request
// @dec -> Get Position Metric (Not Athlete Evaluation)
export const getPositionMetric = (req, res, next) => {
  MasterGetMetric(req, res, next);
};

// @path -> /api/v1/metric/position/:positionId
// @type -> PUT Request
// @dec -> Update Position Metric (Not Athlete Evaluation)
export const updatePositionMetric = (req, res, next) => {
  MasterUpdateMetric(req, res, next);
};

// @path -> /api/v1/metric/position/
// @type -> DELETE Request
// @dec -> Delete Position Metric (Not Athlete Evaluation)
export const deletePositionMetric = (req, res, next) => {
  MasterDeleteMetric(req, res, next);
};

// @path -> /api/v1/metric/position/pfa/:userId/:evaluationId
// @type -> PUT Request
// @dec -> Update Position Evaluation for an Athlete
export const updatePositionEvaluation = (req, res, next) => {
  MasterUpdateEvaluation(req, res, next);
};

// @path -> /api/v1/metric/position/pfa/:userId/:evaluationId
// @type -> GET Request
// @dec -> Get Position Evaluation for an Athlete
export const getPositionEvaluation = (req, res, next) => {
  MasterGetEvaluation(req, res, next);
};

// @path -> /api/v1/metric/position/pfa/:userId/:evaluationId
// @type -> DELETE Request
// @dec -> Delete Position Evaluation for an Athlete
export const deletePositionEvaluation = (req, res, next) => {
  MasterDeleteEvaluation(req, res, next);
};
