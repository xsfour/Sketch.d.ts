/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSNonKeyPanel<T = any> extends cocoa.NSPanel {
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSNonKeyPanel<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSNonKeyPanel>(): R;
      new: <R = _NSNonKeyPanel>() => R;
    }
  }
}
