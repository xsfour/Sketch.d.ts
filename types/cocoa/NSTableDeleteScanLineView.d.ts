/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableDeleteScanLineView<T = any> extends cocoa.NSView {
    wantsUpdateLayer<R = boolean>(): R;
    deleteLineColor<R = cocoa.NSColor>(): R;
    setDeleteLineColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableDeleteScanLineView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTableDeleteScanLineView>(): R;
      new: <R = NSTableDeleteScanLineView>() => R;
    }
  }
}

declare const NSTableDeleteScanLineView: cocoa.classes.NSTableDeleteScanLineView;
