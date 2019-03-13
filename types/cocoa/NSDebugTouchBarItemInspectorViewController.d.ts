/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarItemInspectorViewController<T = any> extends NSViewController {
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
  }
  namespace classes {
    export interface NSDebugTouchBarItemInspectorViewController<T = any> extends NSViewController {
      alloc<R = NSDebugTouchBarItemInspectorViewController>(): R;
      new: <R = NSDebugTouchBarItemInspectorViewController>() => R;
    }
  }
}

declare const NSDebugTouchBarItemInspectorViewController: cocoa.classes.NSDebugTouchBarItemInspectorViewController;
