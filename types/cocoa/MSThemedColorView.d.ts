/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSThemedColorView<T = any> extends cocoa.MSColorView {
    color<R = unknown>(): R;
    colorName<R = cocoa.NSString>(): R;
    setColorName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSThemedColorView<T = any> extends cocoa.classes.MSColorView {
      alloc<R = MSThemedColorView>(): R;
      new: <R = MSThemedColorView>() => R;
    }
  }
}

declare const MSThemedColorView: cocoa.classes.MSThemedColorView;
