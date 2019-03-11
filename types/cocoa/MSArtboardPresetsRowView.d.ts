/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsRowView<T = any> extends cocoa.NSTableRowView {}
  namespace classes {
    export interface MSArtboardPresetsRowView<T = any> extends cocoa.classes.NSTableRowView {
      alloc<R = MSArtboardPresetsRowView>(): R;
      new: <R = MSArtboardPresetsRowView>() => R;
    }
  }
}

declare const MSArtboardPresetsRowView: cocoa.classes.MSArtboardPresetsRowView;
