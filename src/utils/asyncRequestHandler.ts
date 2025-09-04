/**
 * @module AsyncRequestHandler
 * @description
 * Provides utility for handling asynchronous Express request handlers with proper error catching.
 * This module helps eliminate the need for try-catch blocks in every async route handler
 * by automatically catching and forwarding errors to Express error middleware.
 */

import { Request, Response, NextFunction } from 'express';

/**
 * Wraps an async Express request handler to properly catch and forward errors
 * 
 * @param handler - The async request handler function to wrap
 * @returns A wrapped handler that automatically catches errors
 * 
 * @template P - Type for request params
 * @template ResBody - Type for response body
 * @template ReqBody - Type for request body
 * @template Q - Type for query string
 * 
 * @example
 * ```typescript
 * // Without wrapper:
 * app.get('/users', async (req, res, next) => {
 *   try {
 *     const users = await getUsers();
 *     res.json(users);
 *   } catch (error) {
 *     next(error);
 *   }
 * });
 * 
 * // With wrapper:
 * app.get('/users', handleAsyncRequest(async (req, res) => {
 *   const users = await getUsers();
 *   res.json(users);
 * }));
 * ```
 * 
 * @remarks
 * This utility solves the common issue of error handling in async Express routes.
 * Without proper error catching, unhandled promises can crash the application.
 * This wrapper ensures that any errors thrown in the async handler are:
 * - Properly caught
 * - Passed to Express error handling middleware
 * - Don't cause unhandled promise rejections
 */
export const handleAsyncRequest = <
  P = any,
  ResBody = any,
  ReqBody = any,
  Q = any
>(
  /**
   * The async request handler function to be wrapped
   * @param req - Express request object
   * @param res - Express response object
   * @param next - Express next function
   * @returns Promise that resolves when the handler is complete
   */
  handler: (req: Request<P, ResBody, ReqBody, Q>, res: Response<ResBody>, next: NextFunction) => Promise<void>,
) => {
  /**
   * The wrapped handler that includes error catching
   * @param req - Express request object
   * @param res - Express response object
   * @param next - Express next function
   */
  return (req: Request<P, ResBody, ReqBody, Q>, res: Response<ResBody>, next: NextFunction) => {
    handler(req, res, next).catch(next);
  };
};
