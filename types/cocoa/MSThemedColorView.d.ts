/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSThemedColorView<T = any> extends MSColorView {
    color<R = unknown>(): R;
    colorName<R = NSString>(): R;
    setColorName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSThemedColorView<T = any> extends MSColorView {
      alloc<R = MSThemedColorView>(): R;
      new: <R = MSThemedColorView>() => R;
    }
  }
}

declare const MSThemedColorView: cocoa.classes.MSThemedColorView;
