/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSException<T = any> {
    // + NSException(NSException,NSExceptionPortCoding,NSUnpublishedEOF):
    debugDescription<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    exceptionRememberingObject_key<R = unknown, P0 = unknown, P1 = unknown>(_exceptionRememberingObject: P0, _key: P1): R;
    exceptionAddingEntriesToUserInfo<R = unknown, P0 = unknown>(_exceptionAddingEntriesToUserInfo: P0): R;
  }
  namespace classes {
    export interface NSException<T = any> {
      // + NSException(NSException,NSExceptionPortCoding,NSUnpublishedEOF):
      validationExceptionWithFormat<R = unknown, P0 = unknown>(_validationExceptionWithFormat: P0): R;
      aggregateExceptionWithExceptions<R = unknown, P0 = unknown>(_aggregateExceptionWithExceptions: P0): R;
    }
  }
}

declare const NSException: cocoa.classes.NSException;
