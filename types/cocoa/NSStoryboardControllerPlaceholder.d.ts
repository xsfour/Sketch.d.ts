/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardControllerPlaceholder<T = any> extends cocoa.NSObject {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
  }
  namespace classes {
    export interface NSStoryboardControllerPlaceholder<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSStoryboardControllerPlaceholder>(): R;
      new: <R = NSStoryboardControllerPlaceholder>() => R;
    }
  }
}

declare const NSStoryboardControllerPlaceholder: cocoa.classes.NSStoryboardControllerPlaceholder;
