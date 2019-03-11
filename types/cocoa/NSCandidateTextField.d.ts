/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateTextField<T = any> extends cocoa.NSTextField {
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    setAttributedCorrection<R = void, P0 = unknown>(_setAttributedCorrection: P0): R;
    trimOnRight<R = boolean>(): R;
    setTrimOnRight<R = void, P0 = boolean>(_v: P0): R;
    trimOnLeft<R = boolean>(): R;
    setTrimOnLeft<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSCandidateTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = NSCandidateTextField>(): R;
      new: <R = NSCandidateTextField>() => R;
    }
  }
}

declare const NSCandidateTextField: cocoa.classes.NSCandidateTextField;
