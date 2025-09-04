/**
 * Collection of HTTP 5xx server error classes.
 * Theses errors indicate server-side issues.
 * @module serverErrors
 */

/** HTTP 5xx server error classes for handling server-side errors */
import { ERRORS_CONSTANTS } from '../configs/error-constants';
import {  BaseServerError } from './baseForgeError';
import { ErrorPayloadType } from '../types';

/** 
 * Common pattern for all error classes in this module:
 * - Extends BaseServerError
 * - Takes string or ErrorPayloadType input
 * - Returns standardized error payload
 */
export class InternalServerError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.InternalServerError.message) {
    const errorResponse = ERRORS_CONSTANTS.InternalServerError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class NotImplementedError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.NotImplementedError.message) {
    const errorResponse = ERRORS_CONSTANTS.NotImplementedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, NotImplementedError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class BadGatewayError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.BadGatewayError.message) {
    const errorResponse = ERRORS_CONSTANTS.BadGatewayError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, BadGatewayError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class ServiceUnavailableError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.ServiceUnavailableError.message) {
    const errorResponse = ERRORS_CONSTANTS.ServiceUnavailableError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class GatewayTimeoutError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.GatewayTimeoutError.message) {
    const errorResponse = ERRORS_CONSTANTS.GatewayTimeoutError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class HTTPVersionNotSupportedError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.HTTPVersionNotSupportedError.message) {
    const errorResponse = ERRORS_CONSTANTS.HTTPVersionNotSupportedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, HTTPVersionNotSupportedError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class VariantAlsoNegotiatesError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.VariantAlsoNegotiatesError.message) {
    const errorResponse = ERRORS_CONSTANTS.VariantAlsoNegotiatesError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, VariantAlsoNegotiatesError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class InsufficientStorageError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.InsufficientStorageError.message) {
    const errorResponse = ERRORS_CONSTANTS.InsufficientStorageError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, InsufficientStorageError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class LoopDetectedError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.LoopDetectedError.message) {
    const errorResponse = ERRORS_CONSTANTS.LoopDetectedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, LoopDetectedError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class BandwidthLimitExceededError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.BandwidthLimitExceededError.message) {
    const errorResponse = ERRORS_CONSTANTS.BandwidthLimitExceededError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, BandwidthLimitExceededError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class NotExtendedError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.NotExtendedError.message) {
    const errorResponse = ERRORS_CONSTANTS.NotExtendedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, NotExtendedError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}

export class NetworkAuthenticationRequiredError extends BaseServerError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.NetworkAuthenticationRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.NetworkAuthenticationRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, NetworkAuthenticationRequiredError.prototype);
  }

  buildErrorPayload() {
    return {
      message: this.message,
      errorCode: this.errorCode,
      statusCode: this.statusCode,
      ...(this.data && { data: this.data }),
    };
  }
}
