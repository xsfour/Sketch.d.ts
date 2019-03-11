/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOptionalRenderer<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    forwardingTargetForSelector<R = unknown, P0 = string>(_forwardingTargetForSelector: P0): R;
    initWithBaseRenderer_disableSetting<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseRenderer: P0, _disableSetting: P1): R;
    disableSetting<R = cocoa.NSString>(): R;
    setDisableSetting<R = void, P0 = cocoa.NSString>(_v: P0): R;
    baseRenderer<R = unknown>(): R;
    setBaseRenderer<R = void, P0 = unknown>(_v: P0): R;
    enabled<R = boolean>(): R;
  }
  namespace classes {
    export interface MSOptionalRenderer<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOptionalRenderer>(): R;
      new: <R = MSOptionalRenderer>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSOptionalRenderer: cocoa.classes.MSOptionalRenderer;
