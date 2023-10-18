const errorHandler = (err, req, res, next) => {
    console.error(err);
  
    let statusCode = 500;
    let message = 'Internal Server Error';
  
    if (err instanceof CustomError) {
      // Handle custom application-specific errors
      statusCode = err.statusCode;
      message = err.message;
    }
  
    res.status(statusCode).json({ error: message });
  };
  
  class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.name = 'CustomError';
      this.statusCode = statusCode || 500;
    }
  }
  
  module.exports = { errorHandler, CustomError };
  