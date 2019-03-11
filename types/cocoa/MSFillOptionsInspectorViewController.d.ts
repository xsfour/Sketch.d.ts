/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillOptionsInspectorViewController<T = any> extends cocoa.NSViewController {
    cxx_destruct<R = void>(): R;
    layers<R = cocoa.NSArray>(): R;
    setLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSFillOptionsInspectorViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = MSFillOptionsInspectorViewController>(): R;
      new: <R = MSFillOptionsInspectorViewController>() => R;
    }
  }
}

declare const MSFillOptionsInspectorViewController: cocoa.classes.MSFillOptionsInspectorViewController;
