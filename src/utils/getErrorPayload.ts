/**
 * @module ErrorPayload
 * @description Utility functions for extracting and formatting error payloads from various error types.
 * These utilities help standardize error responses across the application.
 */

import { BaseClientError, BaseForgeError, BaseServerError } from '../errors/baseForgeError';
import { forgeErrorType } from '../types';
import _get from 'lodash/get';

/**
 * Extracts a standardized error payload from a BaseForgeError
 * @param error - The error object to process
 * @returns A formatted error payload if the error is a BaseForgeError, undefined otherwise
 * @example
 * ```typescript
 * const error = new SomeForgeError('Something went wrong');
 * const payload = getErrorPayload(error);
 * if (payload) {
 *   // Handle the error payload
 * }
 * ```
 */
export const getErrorPayload = (error: unknown): forgeErrorType | undefined => {
  if (error instanceof BaseForgeError) {
    return error.buildErrorPayload();
  }
};

/**
 * Extracts a standardized error payload from a client error (4xx)
 * @param error - The error object to process
 * @returns A formatted error payload if the error is a BaseClientError, undefined otherwise
 * @example
 * ```typescript
 * const error = new NotFoundError('Resource not found');
 * const payload = getClientErrorPayload(error);
 * if (payload) {
 *   // Handle the client error payload
 * }
 * ```
 */
export const getClientErrorPayload = (error: unknown): forgeErrorType | undefined => {
  if (error instanceof BaseClientError) {
    return error.buildErrorPayload();
  }
};

/**
 * Extracts a standardized error payload from a server error (5xx)
 * @param error - The error object to process
 * @returns A formatted error payload if the error is a BaseServerError, undefined otherwise
 * @example
 * ```typescript
 * const error = new InternalServerError('Database connection failed');
 * const payload = getServerErrorPayload(error);
 * if (payload) {
 *   // Handle the server error payload
 * }
 * ```
 */
export const getServerErrorPayload = (error: unknown): forgeErrorType | undefined => {
  if (error instanceof BaseServerError) {
    return error.buildErrorPayload();
  }
};

/**
 * Creates a client error payload, falling back to default values for non-client errors
 * @param error - The error object to process
 * @returns A formatted client error payload
 * @remarks
 * This function will always return a payload, using default client error values
 * if the input is not a proper client error.
 * @example
 * ```typescript
 * // Will create a payload even for non-HTTP errors
 * const error = new Error('Something went wrong');
 * const payload = getForgeClientErrorPayload(error);
 * // payload will have default client error values
 * ```
 */
export const getForgeClientErrorPayload = (error: unknown): forgeErrorType => {
  if (error instanceof BaseClientError) {
    return error.buildErrorPayload();
  } else {
    const statusCode = _get(error, ['statusCode'], 400);
    const message = _get(error, ['message'], 'Bad Request');
    const errorCode = _get(error, ['errorCode'], 'BAD_REQUEST');
    const data = _get(error, ['data'], undefined);
    return {
      message,
      errorCode,
      statusCode,
      data,
    };
  }
};

/**
 * Creates a server error payload, falling back to default values for non-server errors
 * @param error - The error object to process
 * @returns A formatted server error payload
 * @remarks
 * This function will always return a payload, using default server error values
 * if the input is not a proper server error.
 * @example
 * ```typescript
 * // Will create a payload even for non-HTTP errors
 * const error = new Error('Database connection failed');
 * const payload = getForgeServerErrorPayload(error);
 * // payload will have default server error values
 * ```
 */
export const getForgeServerErrorPayload = (error: unknown): forgeErrorType => {
  if (error instanceof BaseServerError) {
    return error.buildErrorPayload();
  } else {
    const statusCode = _get(error, ['statusCode'], 500);
    const message = _get(error, ['message'], 'Something Went Wrong');
    const errorCode = _get(error, ['errorCode'], 'INTERNAL_SERVER_ERROR');
    const data = _get(error, ['data'], undefined);
    return {
      message,
      errorCode,
      statusCode,
      data,
    };
  }
};

/**
 * Creates a generic error payload, falling back to server error defaults for unknown errors
 * @param error - The error object to process
 * @returns A formatted error payload
 * @remarks
 * This function will always return a payload. For non-HTTP errors, it uses server
 * error defaults as a safe fallback.
 * @example
 * ```typescript
 * try {
 *   // some operation
 * } catch (error) {
 *   const payload = getForgeErrorPayload(error);
 *   // Always returns a valid payload
 * }
 * ```
 */
export const getForgeErrorPayload = (error: unknown): forgeErrorType => {
  if (error instanceof BaseForgeError) {
    return error.buildErrorPayload();
  } else {
    const statusCode = _get(error, ['statusCode'], 500);
    const message = _get(error, ['message'], 'Something Went Wrong');
    const errorCode = _get(error, ['errorCode'], 'INTERNAL_SERVER_ERROR');
    const data = _get(error, ['data'], undefined);

    return {
      message,
      errorCode,
      statusCode,
      data,
    };
  }
};
