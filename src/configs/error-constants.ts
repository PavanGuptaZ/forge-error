/**
 * A comprehensive collection of HTTP error definitions used throughout the application.
 * Each error definition includes:
 * - `statusCode`: The HTTP status code for the error
 * - `errorCode`: A unique string identifier for the error type
 * - `message`: A human-readable default message for the error
 * 
 * @remarks
 * The errors are categorized into client errors (4xx) and server errors (5xx).
 * Each error object follows the structure:
 * ```typescript
 * {
 *   statusCode: number;
 *   errorCode: string;
 *   message: string;
 * }
 * ```
 */
export const ERRORS_CONSTANTS = {
  // 4xx Client Errors
  BadRequestError: {
    statusCode: 400,
    errorCode: "BAD_REQUEST",
    message:
      "The request could not be processed due to invalid syntax or parameters",
  },
  UnauthorizedError: {
    statusCode: 401,
    errorCode: "UNAUTHORIZED",
    message: "Authentication is required to access this resource",
  },
  PaymentRequiredError: {
    statusCode: 402,
    errorCode: "PAYMENT_REQUIRED",
    message: "Payment is required to access this resource",
  },
  ForbiddenError: {
    statusCode: 403,
    errorCode: "FORBIDDEN",
    message: "You do not have permission to access this resource",
  },
  NotFoundError: {
    statusCode: 404,
    errorCode: "NOT_FOUND",
    message: "The requested resource could not be found",
  },
  MethodNotAllowedError: {
    statusCode: 405,
    errorCode: "METHOD_NOT_ALLOWED",
    message: "The requested HTTP method is not allowed for this resource",
  },
  NotAcceptableError: {
    statusCode: 406,
    errorCode: "NOT_ACCEPTABLE",
    message: "The requested content type cannot be served by this resource",
  },
  ProxyAuthenticationRequiredError: {
    statusCode: 407,
    errorCode: "PROXY_AUTHENTICATION_REQUIRED",
    message: "Proxy server authentication is required to access this resource",
  },
  RequestTimeoutError: {
    statusCode: 408,
    errorCode: "REQUEST_TIMEOUT",
    message: "The server timed out waiting for the request to complete",
  },
  ConflictError: {
    statusCode: 409,
    errorCode: "CONFLICT",
    message: "The request conflicts with the current state of the resource",
  },
  GoneError: {
    statusCode: 410,
    errorCode: "GONE",
    message:
      "The requested resource is no longer available and has been permanently removed",
  },
  LengthRequiredError: {
    statusCode: 411,
    errorCode: "LENGTH_REQUIRED",
    message: "Content-Length header is required for this request",
  },
  PreconditionFailedError: {
    statusCode: 412,
    errorCode: "PRECONDITION_FAILED",
    message: "One or more conditions in the request headers failed",
  },
  PayloadTooLargeError: {
    statusCode: 413,
    errorCode: "PAYLOAD_TOO_LARGE",
    message: "Request payload exceeds the maximum allowed size",
  },
  URITooLongError: {
    statusCode: 414,
    errorCode: "URI_TOO_LONG",
    message: "Request URI exceeds the maximum allowed length",
  },
  UnsupportedMediaTypeError: {
    statusCode: 415,
    errorCode: "UNSUPPORTED_MEDIA_TYPE",
    message: "The request content type is not supported by this endpoint",
  },
  RangeNotSatisfiableError: {
    statusCode: 416,
    errorCode: "RANGE_NOT_SATISFIABLE",
    message: "The requested range of the resource cannot be satisfied",
  },
  ExpectationFailedError: {
    statusCode: 417,
    errorCode: "EXPECTATION_FAILED",
    message:
      "Server cannot meet the requirements specified in the Expect header",
  },
  TeapotError: {
    statusCode: 418,
    errorCode: "IM_A_TEAPOT",
    message: "Server refuses to brew coffee because it is a teapot (RFC 2324)",
  },
  SessionExpiredError: {
    statusCode: 419,
    errorCode: "SESSION_EXPIRED",
    message: "Your session has expired. Please refresh and try again",
  },
  RateLimitError: {
    statusCode: 420,
    errorCode: "RATE_LIMIT_EXCEEDED",
    message: "Request rate limit has been exceeded. Please slow down",
  },
  MisdirectedRequestError: {
    statusCode: 421,
    errorCode: "MISDIRECTED_REQUEST",
    message: "The request was sent to a server unable to produce a response",
  },
  UnprocessableEntityError: {
    statusCode: 422,
    errorCode: "UNPROCESSABLE_ENTITY",
    message: "The request was well-formed but contains invalid parameters",
  },
  LockedError: {
    statusCode: 423,
    errorCode: "RESOURCE_LOCKED",
    message: "The requested resource is currently locked",
  },
  FailedDependencyError: {
    statusCode: 424,
    errorCode: "FAILED_DEPENDENCY",
    message: "The request failed due to the failure of a previous request",
  },
  TooEarlyError: {
    statusCode: 425,
    errorCode: "TOO_EARLY",
    message:
      "The server is not ready to process the request due to possible replay attack",
  },
  UpgradeRequiredError: {
    statusCode: 426,
    errorCode: "UPGRADE_REQUIRED",
    message: "Client must upgrade to a different protocol version",
  },
  PreconditionRequiredError: {
    statusCode: 428,
    errorCode: "PRECONDITION_REQUIRED",
    message: "This request requires preconditions to be specified",
  },
  TooManyRequestsError: {
    statusCode: 429,
    errorCode: "TOO_MANY_REQUESTS",
    message: "Rate limit exceeded. Please try again later",
  },
  RequestHeadersTooLargeError: {
    statusCode: 431,
    errorCode: "REQUEST_HEADERS_TOO_LARGE",
    message: "Request header fields exceed maximum allowed size",
  },
  NoResponseError: {
    statusCode: 444,
    errorCode: "NO_RESPONSE",
    message: "Server returned no information and closed the connection",
  },
  RetryWithError: {
    statusCode: 449,
    errorCode: "RETRY_WITH",
    message:
      "The request should be retried after performing the appropriate action",
  },
  BlockedByWindowsParentalControlsError: {
    statusCode: 450,
    errorCode: "BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS",
    message: "Access denied by Windows parental controls",
  },
  LegallyRestrictedError: {
    statusCode: 451,
    errorCode: "LEGALLY_RESTRICTED",
    message: "Access to this resource has been denied for legal reasons",
  },
  RequestHeaderTooLargeError: {
    statusCode: 494,
    errorCode: "REQUEST_HEADER_TOO_LARGE",
    message: "Request header section is too large",
  },
  SSLCertificateError: {
    statusCode: 495,
    errorCode: "SSL_CERTIFICATE_ERROR",
    message: "SSL/TLS certificate validation error",
  },
  SSLCertificateRequiredError: {
    statusCode: 496,
    errorCode: "SSL_CERTIFICATE_REQUIRED",
    message: "A valid SSL/TLS certificate is required",
  },
  HTTPRequestSentToHTTPSPortError: {
    statusCode: 497,
    errorCode: "HTTP_REQUEST_SENT_TO_HTTPS_PORT",
    message: "An HTTP request was sent to an HTTPS port",
  },
  InvalidTokenError: {
    statusCode: 498,
    errorCode: "INVALID_TOKEN",
    message: "The token provided is invalid or has expired",
  },
  TokenRequiredError: {
    statusCode: 499,
    errorCode: "TOKEN_REQUIRED",
    message: "A valid token is required to access this resource",
  },
  ClientClosedRequestError: {
    statusCode: 499,
    errorCode: "CLIENT_CLOSED_REQUEST",
    message: "Client closed the request before the server could respond",
  },

  // 5xx Server Errors
  InternalServerError: {
    statusCode: 500,
    errorCode: "INTERNAL_SERVER_ERROR",
    message: "An unexpected error occurred. Please try again later",
  },
  NotImplementedError: {
    statusCode: 501,
    errorCode: "NOT_IMPLEMENTED",
    message: "This functionality is not currently implemented",
  },
  BadGatewayError: {
    statusCode: 502,
    errorCode: "BAD_GATEWAY",
    message: "Invalid response received from the upstream server",
  },
  ServiceUnavailableError: {
    statusCode: 503,
    errorCode: "SERVICE_UNAVAILABLE",
    message: "Service is temporarily unavailable. Please try again later",
  },
  GatewayTimeoutError: {
    statusCode: 504,
    errorCode: "GATEWAY_TIMEOUT",
    message: "Gateway timeout while waiting for response from upstream server",
  },
  HTTPVersionNotSupportedError: {
    statusCode: 505,
    errorCode: "HTTP_VERSION_NOT_SUPPORTED",
    message: "The HTTP version used in the request is not supported",
  },
  VariantAlsoNegotiatesError: {
    statusCode: 506,
    errorCode: "VARIANT_ALSO_NEGOTIATES",
    message: "Server configuration error in content negotiation",
  },
  InsufficientStorageError: {
    statusCode: 507,
    errorCode: "INSUFFICIENT_STORAGE",
    message: "Insufficient storage space to complete the request",
  },
  LoopDetectedError: {
    statusCode: 508,
    errorCode: "LOOP_DETECTED",
    message: "Request processing stopped due to infinite loop detection",
  },
  BandwidthLimitExceededError: {
    statusCode: 509,
    errorCode: "BANDWIDTH_LIMIT_EXCEEDED",
    message: "Server bandwidth limit has been exceeded",
  },
  NotExtendedError: {
    statusCode: 510,
    errorCode: "NOT_EXTENDED",
    message: "Server requires additional extensions to fulfill the request",
  },
  NetworkAuthenticationRequiredError: {
    statusCode: 511,
    errorCode: "NETWORK_AUTHENTICATION_REQUIRED",
    message: "Network authentication is required to access this resource",
  },
};
