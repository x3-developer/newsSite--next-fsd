export interface IErrorResponseData {
  exceptionTypeName: string;
  message: string;
}

export interface IErrorResponse {
  code: number;
  message: string;
  data: IErrorResponseData;
}

export interface IActionFetchResult<T> {
  isSuccessful: boolean;
  message: string;
  data?: T;
}

export interface IActionFetchResponse<T> {
  jsonrpc: '3.0';
  id: number;
  error?: IErrorResponse;
  result: T;
}

export const FETCH_PARAMETERS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const FETCH_BODY_PARAMETERS = {
  jsonrpc: '3.0',
  id: '1',
};
