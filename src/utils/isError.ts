/**
 * @module ErrorTypeGuards
 * @description 
 * Type guard utilities for checking error types in the application.
 * These functions help safely determine the type of an error at runtime
 * and provide TypeScript type narrowing support.
 */

import { BaseForgeError, BaseClientError, BaseServerError } from '../errors/baseForgeError';

/**
 * Checks if an error is a BaseForgeError instance
 * 
 * @param error - The value to check, can be any type
 * @returns boolean indicating if the value is a BaseForgeError
 * 
 * @example
 * ```typescript
 * try {
 *   // some operation
 * } catch (error) {
 *   if (isBaseError(error)) {
 *     // TypeScript now knows this is a BaseForgeError
 *     const payload = error.buildErrorPayload();
 *   }
 * }
 * ```
 * 
 * @remarks
 * This is a type guard function that also performs runtime type checking.
 * It ensures the error is not null or undefined before checking its type.
 * When used in an if statement, TypeScript will narrow the type in the true branch.
 */
export const isBaseError = (error: unknown): error is BaseForgeError => {
  return error != null && error instanceof BaseForgeError;
};

/**
 * Checks if an error is a client error (4xx)
 * 
 * @param error - The value to check, can be any type
 * @returns boolean indicating if the value is a BaseClientError
 * 
 * @example
 * ```typescript
 * try {
 *   await fetchData();
 * } catch (error) {
 *   if (isClientError(error)) {
 *     // TypeScript now knows this is a BaseClientError
 *     // Handle client errors (400-499)
 *     console.log(`Client error: ${error.statusCode}`);
 *   }
 * }
 * ```
 * 
 * @remarks
 * This type guard is useful for handling client-side errors (4xx status codes).
 * It helps distinguish user/client related errors from other types of errors.
 * Common client errors include: Bad Request (400), Unauthorized (401), Forbidden (403), etc.
 */
export const isClientError = (error: unknown): error is BaseClientError => {
  return error != null && error instanceof BaseClientError;
};

/**
 * Checks if an error is a server error (5xx)
 * 
 * @param error - The value to check, can be any type
 * @returns boolean indicating if the value is a BaseServerError
 * 
 * @example
 * ```typescript
 * try {
 *   await processData();
 * } catch (error) {
 *   if (isServerError(error)) {
 *     // TypeScript now knows this is a BaseServerError
 *     // Handle server errors (500-599)
 *     console.error(`Server error ${error.statusCode}: ${error.message}`);
 *     notifyAdmin(error.buildErrorPayload());
 *   }
 * }
 * ```
 * 
 * @remarks
 * This type guard identifies server-side errors (5xx status codes).
 * These errors typically indicate problems with the server rather than the client request.
 * Common server errors include: Internal Server Error (500), Service Unavailable (503), etc.
 * These errors often require administrator attention or system fixes.
 */
export const isServerError = (error: unknown): error is BaseServerError => {
  return error != null && error instanceof BaseServerError;
};
