/**
 * Collection of HTTP 4xx client error classes.
 * These errors indicate that the client's request contains invalid syntax or cannot be fulfilled.
 * @module clientErrors
 */

/** HTTP 4xx client error classes for handling client-side request errors */

import { ERRORS_CONSTANTS } from '../configs/error-constants';
import { BaseClientError } from './baseForgeError';
import { ErrorPayloadType } from '../types';


/** 
 * Common pattern for all error classes in this module:
 * - Extends BaseClientError
 * - Takes string or ErrorPayloadType input
 * - Returns standardized error payload
 */

/** 400 Bad Request - Invalid request syntax */
export class BadRequestError extends BaseClientError {
  constructor(input: ErrorPayloadType) {
    const errorResponse = ERRORS_CONSTANTS.BadRequestError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, BadRequestError.prototype);
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

export class UnauthorizedError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.UnauthorizedError.message) {
    const errorResponse = ERRORS_CONSTANTS.UnauthorizedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
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

export class PaymentRequiredError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.PaymentRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.PaymentRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, PaymentRequiredError.prototype);
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

export class ForbiddenError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.ForbiddenError.message) {
    const errorResponse = ERRORS_CONSTANTS.ForbiddenError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
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

export class NotFoundError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.NotFoundError.message) {
    const errorResponse = ERRORS_CONSTANTS.NotFoundError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, NotFoundError.prototype);
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

export class MethodNotAllowedError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.MethodNotAllowedError.message) {
    const errorResponse = ERRORS_CONSTANTS.MethodNotAllowedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
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

export class NotAcceptableError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.NotAcceptableError.message) {
    const errorResponse = ERRORS_CONSTANTS.NotAcceptableError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, NotAcceptableError.prototype);
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

export class ProxyAuthenticationRequiredError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.ProxyAuthenticationRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.ProxyAuthenticationRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, ProxyAuthenticationRequiredError.prototype);
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

export class RequestTimeoutError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.RequestTimeoutError.message) {
    const errorResponse = ERRORS_CONSTANTS.RequestTimeoutError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, RequestTimeoutError.prototype);
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

export class ConflictError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.ConflictError.message) {
    const errorResponse = ERRORS_CONSTANTS.ConflictError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, ConflictError.prototype);
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

export class GoneError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.GoneError.message) {
    const errorResponse = ERRORS_CONSTANTS.GoneError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, GoneError.prototype);
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

export class LengthRequiredError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.LengthRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.LengthRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, LengthRequiredError.prototype);
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

export class PreconditionFailedError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.PreconditionFailedError.message) {
    const errorResponse = ERRORS_CONSTANTS.PreconditionFailedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, PreconditionFailedError.prototype);
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

export class PayloadTooLargeError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.PayloadTooLargeError.message) {
    const errorResponse = ERRORS_CONSTANTS.PayloadTooLargeError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, PayloadTooLargeError.prototype);
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

export class URITooLongError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.URITooLongError.message) {
    const errorResponse = ERRORS_CONSTANTS.URITooLongError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, URITooLongError.prototype);
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

export class UnsupportedMediaTypeError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.UnsupportedMediaTypeError.message) {
    const errorResponse = ERRORS_CONSTANTS.UnsupportedMediaTypeError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, UnsupportedMediaTypeError.prototype);
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

export class RangeNotSatisfiableError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.RangeNotSatisfiableError.message) {
    const errorResponse = ERRORS_CONSTANTS.RangeNotSatisfiableError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, RangeNotSatisfiableError.prototype);
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

export class ExpectationFailedError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.ExpectationFailedError.message) {
    const errorResponse = ERRORS_CONSTANTS.ExpectationFailedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, ExpectationFailedError.prototype);
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

export class TeapotError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.TeapotError.message) {
    const errorResponse = ERRORS_CONSTANTS.TeapotError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, TeapotError.prototype);
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

export class MisdirectedRequestError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.MisdirectedRequestError.message) {
    const errorResponse = ERRORS_CONSTANTS.MisdirectedRequestError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, MisdirectedRequestError.prototype);
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

export class UnprocessableEntityError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.UnprocessableEntityError.message) {
    const errorResponse = ERRORS_CONSTANTS.UnprocessableEntityError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
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

export class LockedError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.LockedError.message) {
    const errorResponse = ERRORS_CONSTANTS.LockedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, LockedError.prototype);
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

export class FailedDependencyError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.FailedDependencyError.message) {
    const errorResponse = ERRORS_CONSTANTS.FailedDependencyError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, FailedDependencyError.prototype);
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

export class TooEarlyError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.TooEarlyError.message) {
    const errorResponse = ERRORS_CONSTANTS.TooEarlyError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, TooEarlyError.prototype);
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

export class UpgradeRequiredError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.UpgradeRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.UpgradeRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, UpgradeRequiredError.prototype);
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

export class PreconditionRequiredError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.PreconditionRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.PreconditionRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, PreconditionRequiredError.prototype);
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

export class TooManyRequestsError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.TooManyRequestsError.message) {
    const errorResponse = ERRORS_CONSTANTS.TooManyRequestsError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, TooManyRequestsError.prototype);
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

export class RequestHeaderFieldsTooLargeError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.RequestHeadersTooLargeError.message) {
    const errorResponse = ERRORS_CONSTANTS.RequestHeadersTooLargeError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, RequestHeaderFieldsTooLargeError.prototype);
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

export class UnavailableForLegalReasonsError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.LegallyRestrictedError.message) {
    const errorResponse = ERRORS_CONSTANTS.LegallyRestrictedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, UnavailableForLegalReasonsError.prototype);
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

export class NoResponseError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.NoResponseError.message) {
    const errorResponse = ERRORS_CONSTANTS.NoResponseError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, NoResponseError.prototype);
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

export class RetryWithError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.RetryWithError.message) {
    const errorResponse = ERRORS_CONSTANTS.RetryWithError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, RetryWithError.prototype);
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

export class BlockedByWindowsParentalControlsError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.BlockedByWindowsParentalControlsError.message) {
    const errorResponse = ERRORS_CONSTANTS.BlockedByWindowsParentalControlsError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, BlockedByWindowsParentalControlsError.prototype);
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

export class LegallyRestrictedError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.LegallyRestrictedError.message) {
    const errorResponse = ERRORS_CONSTANTS.LegallyRestrictedError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, LegallyRestrictedError.prototype);
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

export class RequestHeaderTooLargeError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.RequestHeaderTooLargeError.message) {
    const errorResponse = ERRORS_CONSTANTS.RequestHeaderTooLargeError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, RequestHeaderTooLargeError.prototype);
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

export class SSLCertificateError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.SSLCertificateError.message) {
    const errorResponse = ERRORS_CONSTANTS.SSLCertificateError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, SSLCertificateError.prototype);
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

export class SSLCertificateRequiredError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.SSLCertificateRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.SSLCertificateRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, SSLCertificateRequiredError.prototype);
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

export class HTTPRequestSentToHTTPSPortError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.HTTPRequestSentToHTTPSPortError.message) {
    const errorResponse = ERRORS_CONSTANTS.HTTPRequestSentToHTTPSPortError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, HTTPRequestSentToHTTPSPortError.prototype);
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

export class InvalidTokenError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.InvalidTokenError.message) {
    const errorResponse = ERRORS_CONSTANTS.InvalidTokenError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, InvalidTokenError.prototype);
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

export class TokenRequiredError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.TokenRequiredError.message) {
    const errorResponse = ERRORS_CONSTANTS.TokenRequiredError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, TokenRequiredError.prototype);
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

export class ClientClosedRequestError extends BaseClientError {
  constructor(input: ErrorPayloadType = ERRORS_CONSTANTS.ClientClosedRequestError.message) {
    const errorResponse = ERRORS_CONSTANTS.ClientClosedRequestError;

    const normalized = typeof input === 'string' ? { message: input } : input;
    const {
      message,
      data,
      statusCode = errorResponse.statusCode,
      errorCode = errorResponse.errorCode,
    } = normalized;

    super(message, statusCode, errorCode, data);
    Object.setPrototypeOf(this, ClientClosedRequestError.prototype);
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
