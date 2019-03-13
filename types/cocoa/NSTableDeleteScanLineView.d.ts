/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableDeleteScanLineView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    deleteLineColor<R = NSColor>(): R;
    setDeleteLineColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableDeleteScanLineView<T = any> extends NSView {
      alloc<R = NSTableDeleteScanLineView>(): R;
      new: <R = NSTableDeleteScanLineView>() => R;
    }
  }
}

declare const NSTableDeleteScanLineView: cocoa.classes.NSTableDeleteScanLineView;
