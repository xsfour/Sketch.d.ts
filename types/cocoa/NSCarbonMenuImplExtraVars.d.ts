/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonMenuImplExtraVars<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSCarbonMenuImplExtraVars<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCarbonMenuImplExtraVars>(): R;
      new: <R = NSCarbonMenuImplExtraVars>() => R;
    }
  }
}

declare const NSCarbonMenuImplExtraVars: cocoa.classes.NSCarbonMenuImplExtraVars;
