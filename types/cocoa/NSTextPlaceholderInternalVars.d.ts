/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextPlaceholderInternalVars<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextPlaceholderInternalVars<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTextPlaceholderInternalVars>(): R;
      new: <R = NSTextPlaceholderInternalVars>() => R;
    }
  }
}

declare const NSTextPlaceholderInternalVars: cocoa.classes.NSTextPlaceholderInternalVars;
