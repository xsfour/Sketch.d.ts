/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackingAreaReservedIVars<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSTrackingAreaReservedIVars<T = any> extends NSObject {
      alloc<R = NSTrackingAreaReservedIVars>(): R;
      new: <R = NSTrackingAreaReservedIVars>() => R;
    }
  }
}

declare const NSTrackingAreaReservedIVars: cocoa.classes.NSTrackingAreaReservedIVars;
