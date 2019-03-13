/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityNotifier<T = any> extends NSObject {}
  namespace classes {
    export interface NSAccessibilityNotifier<T = any> extends NSObject {
      alloc<R = NSAccessibilityNotifier>(): R;
      new: <R = NSAccessibilityNotifier>() => R;
      handleAppTermination<R = void, P0 = unknown>(_handleAppTermination: P0): R;
    }
  }
}

declare const NSAccessibilityNotifier: cocoa.classes.NSAccessibilityNotifier;
