/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDrawingInfo<T = any> extends cocoa.NSObject {
    isDragging<R = boolean>(): R;
    setIsDragging<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSDrawingInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSDrawingInfo>(): R;
      new: <R = MSDrawingInfo>() => R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const MSDrawingInfo: cocoa.classes.MSDrawingInfo;
