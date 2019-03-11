/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarInspectorViewController<T = any> extends cocoa.NSViewController {
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
  }
  namespace classes {
    export interface NSDebugTouchBarInspectorViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSDebugTouchBarInspectorViewController>(): R;
      new: <R = NSDebugTouchBarInspectorViewController>() => R;
    }
  }
}

declare const NSDebugTouchBarInspectorViewController: cocoa.classes.NSDebugTouchBarInspectorViewController;
