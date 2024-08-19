// Import Route Functions
import CreateFunctionMetric from "../functions/create_function_metric.js";
import CreateResultFunctionMetric from "../functions/create_result_function_metric.js";
import CreatePerformanceMetric from "../functions/create_performance_metric.js";

// @path -> /api/v1/metric/function
// @type -> POST Request
// @dec -> Create Function Metric
export const createFunctionMetric = (req, res, next) => {
  CreateFunctionMetric(req, res, next);
};

// @path -> /api/v1/metric/function/:functionId
// @type -> POST Request
// @dec -> Create Function Metric Result
export const createResultFunctionMetric = (req, res, next) => {
  CreateResultFunctionMetric(req, res, next);
};

// @path -> /api/v1/metric/performance
// @type -> POST Request
// @dec -> Create Performance Metric
export const createPerformanceMetric = (req, res, next) => {
  CreatePerformanceMetric(req, res, next);
};
