/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySectionSearchElement<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithElement<R = unknown, P0 = unknown>(_initWithElement: P0): R;
    searchKeys<R = cocoa.NSMutableSet>(): R;
    setSearchKeys<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    element<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilitySectionSearchElement<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilitySectionSearchElement>(): R;
      new: <R = NSAccessibilitySectionSearchElement>() => R;
    }
  }
}

declare const NSAccessibilitySectionSearchElement: cocoa.classes.NSAccessibilitySectionSearchElement;
