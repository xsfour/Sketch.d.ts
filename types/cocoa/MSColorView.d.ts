/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSColorView<T = any> extends NSView {
      alloc<R = MSColorView>(): R;
      new: <R = MSColorView>() => R;
    }
  }
}

declare const MSColorView: cocoa.classes.MSColorView;
