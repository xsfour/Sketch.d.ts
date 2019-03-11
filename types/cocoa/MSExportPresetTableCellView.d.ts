/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPresetTableCellView<T = any> extends cocoa.NSTableCellView {
    defaultPresetButton<R = cocoa.NSButton>(): R;
    setDefaultPresetButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportPresetTableCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSExportPresetTableCellView>(): R;
      new: <R = MSExportPresetTableCellView>() => R;
    }
  }
}

declare const MSExportPresetTableCellView: cocoa.classes.MSExportPresetTableCellView;
