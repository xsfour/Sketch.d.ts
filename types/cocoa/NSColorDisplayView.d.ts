/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorDisplayView<T = any> extends cocoa.NSView {
    wantsLayer<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorDisplayView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSColorDisplayView>(): R;
      new: <R = NSColorDisplayView>() => R;
    }
  }
}

declare const NSColorDisplayView: cocoa.classes.NSColorDisplayView;
