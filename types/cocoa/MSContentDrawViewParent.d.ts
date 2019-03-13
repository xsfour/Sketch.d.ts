/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSContentDrawViewParent<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    isOpaque<R = boolean>(): R;
    contentDrawView<R = MSContentDrawView>(): R;
    setContentDrawView<R = void, P0 = MSContentDrawView>(_v: P0): R;
  }
  namespace classes {
    export interface MSContentDrawViewParent<T = any> extends NSView {
      alloc<R = MSContentDrawViewParent>(): R;
      new: <R = MSContentDrawViewParent>() => R;
    }
  }
}

declare const MSContentDrawViewParent: cocoa.classes.MSContentDrawViewParent;
