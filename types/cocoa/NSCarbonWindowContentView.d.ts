/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonWindowContentView<T = any> extends cocoa.NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCarbonWindowContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCarbonWindowContentView>(): R;
      new: <R = NSCarbonWindowContentView>() => R;
    }
  }
}

declare const NSCarbonWindowContentView: cocoa.classes.NSCarbonWindowContentView;
