export type ErrorPayloadType =
  | string
  | {
      message: string;
      data?: object;
      statusCode?: number;
      errorCode?: string;
    };

export type forgeErrorType = {
  message: string;
  statusCode: number;
  errorCode: string;
  data?: object;
};

