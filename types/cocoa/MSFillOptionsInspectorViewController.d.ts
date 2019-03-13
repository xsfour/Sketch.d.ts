/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillOptionsInspectorViewController<T = any> extends NSViewController {
    cxx_destruct<R = void>(): R;
    layers<R = NSArray>(): R;
    setLayers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSFillOptionsInspectorViewController<T = any> extends NSViewController {
      alloc<R = MSFillOptionsInspectorViewController>(): R;
      new: <R = MSFillOptionsInspectorViewController>() => R;
    }
  }
}

declare const MSFillOptionsInspectorViewController: cocoa.classes.MSFillOptionsInspectorViewController;
