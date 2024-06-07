class ErrorResponse extends Error {
  constructor(message, statusCode, title) {
    super(message);
    (this.statusCode = statusCode), (this.title = title);
  }
}

export default ErrorResponse;
