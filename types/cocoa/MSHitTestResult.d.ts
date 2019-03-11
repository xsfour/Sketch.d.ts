/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHitTestResult<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    overrideRepresentation<R = cocoa.MSOverrideRepresentation>(): R;
    setOverrideRepresentation<R = void, P0 = cocoa.MSOverrideRepresentation>(_v: P0): R;
    layer<R = cocoa.MSLayer>(): R;
    setLayer<R = void, P0 = cocoa.MSLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSHitTestResult<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSHitTestResult>(): R;
      new: <R = MSHitTestResult>() => R;
    }
  }
}

declare const MSHitTestResult: cocoa.classes.MSHitTestResult;
