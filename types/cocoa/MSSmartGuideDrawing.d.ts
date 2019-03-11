/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmartGuideDrawing<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSSmartGuideDrawing<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSSmartGuideDrawing>(): R;
      new: <R = MSSmartGuideDrawing>() => R;
      resetSmartGuideColor<R = void>(): R;
      smartGuideColor<R = unknown>(): R;
    }
  }
}

declare const MSSmartGuideDrawing: cocoa.classes.MSSmartGuideDrawing;
