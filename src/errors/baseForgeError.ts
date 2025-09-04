import { forgeErrorType } from '../types';

/** 
 * Base class for all forge error types with standardized error handling
 * @public
 */
export abstract class BaseForgeError extends Error {
  /** 
   * @param message - Error message
   * @param statusCode - HTTP status code
   * @param errorCode - Error identifier
   * @param data - Additional error context
   */
  constructor(
    message: string,
    public statusCode: number,
    public errorCode: string,
    public data?: object,
  ) {
    super(message);
    Object.setPrototypeOf(this, BaseForgeError.prototype);
  }

  /** Creates a structured error response object */
  abstract buildErrorPayload(): forgeErrorType;
}

/** 
 * Base class for HTTP 4xx client errors 
 * @public
 */
export abstract class BaseClientError extends BaseForgeError {
  constructor(
    message: string,
    public statusCode: number,
    public errorCode: string,
    public data?: object,
  ) {
    super(message, statusCode, errorCode, data);
  }

  /** Creates a structured error response object */
  abstract buildErrorPayload(): forgeErrorType;
}

/** 
 * Base class for HTTP 5xx server errors 
 * @public
 */
export abstract class BaseServerError extends BaseForgeError {
  constructor(
    message: string,
    public statusCode: number,
    public errorCode: string,
    public data?: object,
  ) {
    super(message, statusCode, errorCode, data);
  }

  abstract buildErrorPayload(): forgeErrorType;
}

/**
 * A concrete implementation of BaseForgeError that provides a standard error handling mechanism.
 * This class can be used directly for general purpose error cases where a specific error type
 * is not needed.
 * 
 * @extends BaseForgeError
 */
export class ForgeError extends BaseForgeError {
  /**
   * Creates a new ForgeError instance
   * 
   * @param message - The human-readable error message
   * @param statusCode - The HTTP status code associated with this error
   * @param errorCode - A unique identifier for this type of error
   * @param data - Optional additional data to include with the error
   */
  constructor(
    message: string,
    public statusCode: number,
    public errorCode: string,
    public data?: object,
  ) {
    super(message, statusCode, errorCode, data);
  }

  /**
   * Builds a standardized error payload object containing all error information
   * 
   * @returns A structured error payload containing message, status code, error code, and optional data
   */
  buildErrorPayload(): forgeErrorType {
    return {
      message: this.message,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      ...(this.data && { data: this.data }),
    };
  }
}
