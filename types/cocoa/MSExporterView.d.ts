/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExporterView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    renderer<R = cocoa.MSExporter>(): R;
    setRenderer<R = void, P0 = cocoa.MSExporter>(_v: P0): R;
  }
  namespace classes {
    export interface MSExporterView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSExporterView>(): R;
      new: <R = MSExporterView>() => R;
      exportViewWithRenderer<R = unknown, P0 = unknown>(_exportViewWithRenderer: P0): R;
    }
  }
}

declare const MSExporterView: cocoa.classes.MSExporterView;
