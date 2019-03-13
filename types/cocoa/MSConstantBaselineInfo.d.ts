/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstantBaselineInfo<T = any> extends NSObject {
    constantBaselineLineHeight<R = number>(): R;
    setConstantBaselineLineHeight<R = void, P0 = number>(_v: P0): R;
    constantBaselineOffset<R = number>(): R;
    setConstantBaselineOffset<R = void, P0 = number>(_v: P0): R;
    paragraphOffset<R = number>(): R;
  }
  namespace classes {
    export interface MSConstantBaselineInfo<T = any> extends NSObject {
      alloc<R = MSConstantBaselineInfo>(): R;
      new: <R = MSConstantBaselineInfo>() => R;
    }
  }
}

declare const MSConstantBaselineInfo: cocoa.classes.MSConstantBaselineInfo;
