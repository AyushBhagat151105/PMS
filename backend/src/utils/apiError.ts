export class ApiError extends Error {
  statusCode: number;
  message: string;
  success: boolean;
  errors: string[];
  constructor(
    statusCode = 500,
    message = "Something went wrong",
    errors = [],

    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
