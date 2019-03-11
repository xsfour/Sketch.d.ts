/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataDetector<T = any> extends cocoa.NSRegularExpression {
    numberOfCaptureGroups<R = number>(): R;
    options<R = number>(): R;
    pattern<R = unknown>(): R;
    initWithTypes_error<R = unknown, P0 = number, P1 = unknown>(_initWithTypes: P0, _error: P1): R;
    checkingTypes<R = number>(): R;
  }
  namespace classes {
    export interface NSDataDetector<T = any> extends cocoa.classes.NSRegularExpression {
      alloc<R = NSDataDetector>(): R;
      new: <R = NSDataDetector>() => R;
      dataDetectorWithTypes_error<R = unknown, P0 = number, P1 = unknown>(_dataDetectorWithTypes: P0, _error: P1): R;
    }
  }
}

declare const NSDataDetector: cocoa.classes.NSDataDetector;
