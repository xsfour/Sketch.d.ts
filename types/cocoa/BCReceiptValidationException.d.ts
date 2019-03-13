/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCReceiptValidationException<T = any> extends NSException {
    status<R = number>(): R;
  }
  namespace classes {
    export interface BCReceiptValidationException<T = any> extends NSException {
      raiseWithStatus_error<R = void, P0 = number, P1 = number>(_raiseWithStatus: P0, _error: P1): R;
      raiseWithStatus<R = void, P0 = number>(_raiseWithStatus: P0): R;
      exceptionWithStatus<R = unknown, P0 = number>(_exceptionWithStatus: P0): R;
    }
  }
}

declare const BCReceiptValidationException: cocoa.classes.BCReceiptValidationException;
