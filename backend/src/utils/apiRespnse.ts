export class ApiResponse {
  statusCode: number;
  message: string;
  data: Object;
  success: boolean;
  constructor(statusCode = 200, message = "", data = {}) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}
