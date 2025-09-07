# forge-error

A comprehensive and type-safe HTTP error handling library for Node.js and TypeScript applications.
`forge-error` provides a structured, standardized, and consistent approach to defining, throwing, and handling HTTP errors with minimal boilerplate code. With fully typed error classes and built-in support for standardized error responses, it helps you write cleaner, more maintainable error handling logic in your application.

## Table of Contents

1. [Installation](#installation)
2. [Features](#features)
3. [Usage](#usage)

   * [Creating Errors](#creating-errors)
   * [Express Integration](#express-integration)
   * [Async Error Handling](#async-error-handling)
   * [Global Error Handler](#global-error-handler)
4. [Error Classes](#error-classes)
5. [Utilities](#utilities)
6. [Error Payload Structure](#error-payload-structure)
7. [Built-in Error Constants](#built-in-error-constants)

## Installation

```bash
npm install forge-error
# or
yarn add forge-error
# or
pnpm add forge-error
```

## Features

- Full suite of HTTP error classes (4xx and 5xx)
- Standardized error payload structure
- First-class TypeScript support
- Custom error code and data support
- Utility functions to handle, format, and inspect errors
- Seamless integration with Express.js
- Async controller wrapper for concise error handling


## Usage

### Creating Errors

You can create errors using one of the built-in error classes or create fully custom errors with `ForgeError`.

#### Using a Simple String

```typescript
import { NotFoundError } from 'forge-error';

throw new NotFoundError('Resource not found');
```

#### Using a Detailed Object

```typescript
import { BadRequestError } from 'forge-error';

throw new BadRequestError({
  message: 'Invalid input data',
  data: {
    field: 'email',
    issue: 'Invalid format'
  },
  errorCode: 'INVALID_EMAIL'
});
```

#### Creating a Custom Error

```typescript
import { ForgeError } from 'forge-error';

throw new ForgeError(
  'Custom error occurred',
  418,
  'CUSTOM_ERROR_CODE',
  { additional: 'context' }
);
```

### Express Integration

You can easily integrate `forge-error` with your Express.js application to return consistent error responses.

#### Wrapping Async Controllers

Use `handleAsyncRequest` to wrap controller logic and eliminate manual `try-catch` blocks:

```typescript
import express, { Request, Response } from 'express';
import { handleAsyncRequest } from 'forge-error';

const app = express();

app.post('/login', handleAsyncRequest(async (req: Request, res: Response) => {
  // Your logic here
  res.status(200).json({ message: 'Login successful' });
}));
```

You can also export wrapped handlers:

```typescript
// controllers/auth.controller.ts
app.post('/login', loginController);

const loginController = handleAsyncRequest(async (req, res) => {
  // Logic here
});
```

---

### Global Error Handler

Use `getForgeErrorPayload` to build standardized error responses in your global error middleware:

```typescript
const app = express();

app.use(routes)

app.use((error, req, res, next) => {
  const { statusCode, errorCode, message, data } = getForgeErrorPayload(error);

  res.status(statusCode).json({
    success: false,
    statusCode,
    errorCode,
    message,
    ...(data ? { data } : {})
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    errorCode: 'NOT_FOUND',
    message: 'Resource not found'
  });
})
```


```typescript
import { ErrorRequestHandler } from 'express';
import { getForgeErrorPayload } from 'forge-error';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { statusCode, errorCode, message, data } = getForgeErrorPayload(err);

  res.status(statusCode).json({
    success: false,
    statusCode,
    errorCode,
    message,
    ...(data ? { data } : {})
  });
};

export { errorHandler };
```

## Error Classes

The library provides predefined error classes corresponding to standard HTTP status codes.

### Client Errors (4xx)

```typescript
import {
  BadRequestError,           // 400
  UnauthorizedError,         // 401
  ForbiddenError,            // 403
  NotFoundError,             // 404
  MethodNotAllowedError,     // 405
  NotAcceptableError,        // 406
  ConflictError,             // 409
  // ... and more
} from 'forge-error';
```

### Server Errors (5xx)

```typescript
import {
  InternalServerError,       // 500
  NotImplementedError,       // 501
  BadGatewayError,           // 502
  ServiceUnavailableError,   // 503
  GatewayTimeoutError,       // 504
  // ... and more
} from 'forge-error';
```

## Utilities

The package provides several utility functions to handle error payloads. These are divided into two categories:

### Type-Specific Utilities (Return undefined for non-matching errors)

```typescript
import { getErrorPayload, getClientErrorPayload, getServerErrorPayload } from 'forge-error';

// 1. Get payload for any forge error
const error1 = new NotFoundError('Resource not found');
const payload1 = getErrorPayload(error1);
// Returns: { message: 'Resource not found', statusCode: 404, errorCode: 'NOT_FOUND' }

const error2 = new Error('Regular error');
const payload2 = getErrorPayload(error2);
// Returns: undefined

// 2. Get payload only for client errors (4xx)
const clientError = new NotFoundError('Not found');
const clientPayload = getClientErrorPayload(clientError);
// Returns: { message: 'Not found', statusCode: 404, errorCode: 'NOT_FOUND' }

const serverError = new InternalServerError('Server error');
const wrongPayload = getClientErrorPayload(serverError);
// Returns: undefined

// 3. Get payload only for server errors (5xx)
const serverPayload = getServerErrorPayload(serverError);
// Returns: { message: 'Server error', statusCode: 500, errorCode: 'INTERNAL_SERVER_ERROR' }
```

### Guaranteed Payload Utilities (Always return a payload)

```typescript
import { 
  getForgeClientErrorPayload, 
  getForgeServerErrorPayload, 
  getForgeErrorPayload 
} from 'forge-error';

// 1. Always get a client error payload
const error = new Error('Unknown error');
const clientPayload = getForgeClientErrorPayload(error);
// Returns: { 
//   message: 'Unknown error', 
//   statusCode: 400,          // Default client error status
//   errorCode: 'BAD_REQUEST'  // Default client error code
// }

// 2. Always get a server error payload
const serverPayload = getForgeServerErrorPayload(error);
// Returns: {
//   message: 'Unknown error',
//   statusCode: 500,                  // Default server error status
//   errorCode: 'INTERNAL_SERVER_ERROR' // Default server error code
// }

// 3. Always get a generic error payload (uses server error defaults)
const genericPayload = getForgeErrorPayload(error);
// Returns: {
//   message: 'Unknown error',
//   statusCode: 500,
//   errorCode: 'INTERNAL_SERVER_ERROR'
// }

// Common usage in Express error handler:
app.use((error, req, res, next) => {
  // Will always return a valid error response
  const { statusCode, ...payload } = getForgeErrorPayload(error);
  res.status(statusCode).json(payload);
});
```

```typescript
import { isClientError, isServerError, isBaseError } from 'forge-error';

const error = new NotFoundError('Resource not found');

isClientError(error);  // true
isServerError(error);  // false
isBaseError(error);    // true
```
## Error Payload Structure

All forge errors return a standardized structure:

```typescript
{
  message: string;      // Human-readable error message
  statusCode: number;   // HTTP status code
  errorCode: string;    // Error identifier
  data?: object;        // Optional additional context
}
```

This format is useful for consistent API responses, logging, and debugging.


## Error Handling Example

```typescript
try {
  // Your code here
  throw new BadRequestError('Invalid input');
} catch (error) {
  if (error instanceof BadRequestError) {
    const payload = error.buildErrorPayload();
    // Handle the error with standardized payload
    console.log(payload);
    /*
    {
      message: 'Invalid input',
      statusCode: 400,
      errorCode: 'BAD_REQUEST'
    }
    */
  }
}
```

## Built-in Error Constants

The library includes a comprehensive set of predefined HTTP error types with their default values. You can override these defaults using a detailed object.

| Error Class | Status Code | Error Code | Default Message |
|------------|-------------|------------|-----------------|
| **4xx Client Errors** |
| BadRequestError | 400 | BAD_REQUEST | The request could not be processed due to invalid syntax or parameters |
| UnauthorizedError | 401 | UNAUTHORIZED | Authentication is required to access this resource |
| PaymentRequiredError | 402 | PAYMENT_REQUIRED | Payment is required to access this resource |
| ForbiddenError | 403 | FORBIDDEN | You do not have permission to access this resource |
| NotFoundError | 404 | NOT_FOUND | The requested resource could not be found |
| MethodNotAllowedError | 405 | METHOD_NOT_ALLOWED | The requested HTTP method is not allowed for this resource |
| NotAcceptableError | 406 | NOT_ACCEPTABLE | The requested content type cannot be served by this resource |
| ProxyAuthenticationRequiredError | 407 | PROXY_AUTHENTICATION_REQUIRED | Proxy server authentication is required |
| RequestTimeoutError | 408 | REQUEST_TIMEOUT | The server timed out waiting for the request |
| ConflictError | 409 | CONFLICT | The request conflicts with the current state |
| GoneError | 410 | GONE | The requested resource is no longer available |
| LengthRequiredError | 411 | LENGTH_REQUIRED | Content-Length header is required |
| PreconditionFailedError | 412 | PRECONDITION_FAILED | One or more conditions failed |
| PayloadTooLargeError | 413 | PAYLOAD_TOO_LARGE | Request payload exceeds the limit |
| URITooLongError | 414 | URI_TOO_LONG | Request URI exceeds the maximum length |
| UnsupportedMediaTypeError | 415 | UNSUPPORTED_MEDIA_TYPE | The content type is not supported |
| RangeNotSatisfiableError | 416 | RANGE_NOT_SATISFIABLE | The requested range cannot be satisfied |
| ExpectationFailedError | 417 | EXPECTATION_FAILED | Server cannot meet the requirements |
| TeapotError | 418 | IM_A_TEAPOT | I'm a teapot |
| SessionExpiredError | 419 | SESSION_EXPIRED | Your session has expired. Please refresh and try again |
| RateLimitError | 420 | RATE_LIMIT_EXCEEDED | Request rate limit has been exceeded |
| MisdirectedRequestError | 421 | MISDIRECTED_REQUEST | The request was sent to a server unable to produce a response |
| UnprocessableEntityError | 422 | UNPROCESSABLE_ENTITY | The request was well-formed but invalid |
| LockedError | 423 | RESOURCE_LOCKED | The requested resource is currently locked |
| FailedDependencyError | 424 | FAILED_DEPENDENCY | The request failed due to the failure of a previous request |
| TooEarlyError | 425 | TOO_EARLY | The server is not ready to process the request |
| UpgradeRequiredError | 426 | UPGRADE_REQUIRED | Client must upgrade to a different protocol version |
| PreconditionRequiredError | 428 | PRECONDITION_REQUIRED | This request requires preconditions to be specified |
| TooManyRequestsError | 429 | TOO_MANY_REQUESTS | Rate limit exceeded |
| RequestHeaderFieldsTooLargeError | 431 | REQUEST_HEADERS_TOO_LARGE | Request header fields exceed maximum size |
| NoResponseError | 444 | NO_RESPONSE | Server returned no information and closed the connection |
| RetryWithError | 449 | RETRY_WITH | The request should be retried after performing the appropriate action |
| BlockedByWindowsParentalControlsError | 450 | BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS | Access denied by Windows parental controls |
| LegallyRestrictedError | 451 | LEGALLY_RESTRICTED | Access denied for legal reasons |
| RequestHeaderTooLargeError | 494 | REQUEST_HEADER_TOO_LARGE | Request header is too large |
| SSLCertificateError | 495 | SSL_CERTIFICATE_ERROR | SSL/TLS certificate validation error |
| SSLCertificateRequiredError | 496 | SSL_CERTIFICATE_REQUIRED | A valid SSL/TLS certificate is required |
| HTTPRequestSentToHTTPSPortError | 497 | HTTP_REQUEST_SENT_TO_HTTPS_PORT | An HTTP request was sent to an HTTPS port |
| InvalidTokenError | 498 | INVALID_TOKEN | The token provided is invalid or has expired |
| TokenRequiredError | 499 | TOKEN_REQUIRED | A valid token is required to access this resource |
| ClientClosedRequestError | 499 | CLIENT_CLOSED_REQUEST | Client closed the request before the server could respond |
| **5xx Server Errors** |
| InternalServerError | 500 | INTERNAL_SERVER_ERROR | An unexpected error occurred |
| NotImplementedError | 501 | NOT_IMPLEMENTED | Not implemented |
| BadGatewayError | 502 | BAD_GATEWAY | Invalid response from upstream server |
| ServiceUnavailableError | 503 | SERVICE_UNAVAILABLE | Service temporarily unavailable |
| GatewayTimeoutError | 504 | GATEWAY_TIMEOUT | Gateway timeout |
| HTTPVersionNotSupportedError | 505 | HTTP_VERSION_NOT_SUPPORTED | HTTP version not supported |
| VariantAlsoNegotiatesError | 506 | VARIANT_ALSO_NEGOTIATES | Server configuration error in content negotiation |
| InsufficientStorageError | 507 | INSUFFICIENT_STORAGE | Insufficient storage space to complete the request |
| LoopDetectedError | 508 | LOOP_DETECTED | Request processing stopped due to infinite loop detection |
| BandwidthLimitExceededError | 509 | BANDWIDTH_LIMIT_EXCEEDED | Server bandwidth limit has been exceeded |
| NotExtendedError | 510 | NOT_EXTENDED | Server requires additional extensions to fulfill the request |
| NetworkAuthenticationRequiredError | 511 | NETWORK_AUTHENTICATION_REQUIRED | Network authentication is required |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.