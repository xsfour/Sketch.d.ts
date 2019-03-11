/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAssertionHandler<T = any> extends cocoa.NSObject {
    handleFailureInFunction_file_lineNumber_description<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_handleFailureInFunction: P0, _file: P1, _lineNumber: P2, _description: P3): R;
    handleFailureInMethod_object_file_lineNumber_description<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(_handleFailureInMethod: P0, _object: P1, _file: P2, _lineNumber: P3, _description: P4): R;
  }
  namespace classes {
    export interface NSAssertionHandler<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAssertionHandler>(): R;
      new: <R = NSAssertionHandler>() => R;
      currentHandler<R = unknown>(): R;
    }
  }
}

declare const NSAssertionHandler: cocoa.classes.NSAssertionHandler;
