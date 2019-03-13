/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentError<T = any> extends NSError {
    localizedFailureReason<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDocumentError<T = any> extends NSError {
      alloc<R = MSDocumentError>(): R;
      new: <R = MSDocumentError>() => R;
      errorWithCode<R = unknown, P0 = number>(_errorWithCode: P0): R;
    }
  }
}

declare const MSDocumentError: cocoa.classes.MSDocumentError;
