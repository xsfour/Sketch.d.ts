/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsRowView<T = any> extends NSTableRowView {}
  namespace classes {
    export interface MSArtboardPresetsRowView<T = any> extends NSTableRowView {
      alloc<R = MSArtboardPresetsRowView>(): R;
      new: <R = MSArtboardPresetsRowView>() => R;
    }
  }
}

declare const MSArtboardPresetsRowView: cocoa.classes.MSArtboardPresetsRowView;
