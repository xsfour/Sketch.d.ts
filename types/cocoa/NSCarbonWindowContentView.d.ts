/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonWindowContentView<T = any> extends NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCarbonWindowContentView<T = any> extends NSView {
      alloc<R = NSCarbonWindowContentView>(): R;
      new: <R = NSCarbonWindowContentView>() => R;
    }
  }
}

declare const NSCarbonWindowContentView: cocoa.classes.NSCarbonWindowContentView;
