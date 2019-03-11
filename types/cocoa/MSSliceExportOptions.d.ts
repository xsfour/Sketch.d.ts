/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceExportOptions<T = any> extends cocoa.NSViewController {
    cxx_destruct<R = void>(): R;
    setExtensions<R = void, P0 = unknown>(_setExtensions: P0): R;
    optionsViewPNG<R = cocoa.NSView>(): R;
    setOptionsViewPNG<R = void, P0 = cocoa.NSView>(_v: P0): R;
    optionsViewWebP<R = cocoa.NSView>(): R;
    setOptionsViewWebP<R = void, P0 = cocoa.NSView>(_v: P0): R;
    optionsViewSaveForWeb<R = cocoa.NSView>(): R;
    setOptionsViewSaveForWeb<R = void, P0 = cocoa.NSView>(_v: P0): R;
    optionsViewJPG<R = cocoa.NSView>(): R;
    setOptionsViewJPG<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface MSSliceExportOptions<T = any> extends cocoa.classes.NSViewController {
      alloc<R = MSSliceExportOptions>(): R;
      new: <R = MSSliceExportOptions>() => R;
      exportOptionsForRequests<R = unknown, P0 = unknown>(_exportOptionsForRequests: P0): R;
    }
  }
}

declare const MSSliceExportOptions: cocoa.classes.MSSliceExportOptions;
