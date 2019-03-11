/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSContentDrawViewParent<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    isOpaque<R = boolean>(): R;
    contentDrawView<R = cocoa.MSContentDrawView>(): R;
    setContentDrawView<R = void, P0 = cocoa.MSContentDrawView>(_v: P0): R;
  }
  namespace classes {
    export interface MSContentDrawViewParent<T = any> extends cocoa.classes.NSView {
      alloc<R = MSContentDrawViewParent>(): R;
      new: <R = MSContentDrawViewParent>() => R;
    }
  }
}

declare const MSContentDrawViewParent: cocoa.classes.MSContentDrawViewParent;
