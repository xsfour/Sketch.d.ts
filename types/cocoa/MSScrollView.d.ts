/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScrollView<T = any> extends cocoa.NSScrollView {
    allowsScrolling<R = boolean>(): R;
    setAllowsScrolling<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSScrollView<T = any> extends cocoa.classes.NSScrollView {
      alloc<R = MSScrollView>(): R;
      new: <R = MSScrollView>() => R;
    }
  }
}

declare const MSScrollView: cocoa.classes.MSScrollView;
