/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsTableView<T = any> extends NSTableView {}
  namespace classes {
    export interface MSArtboardPresetsTableView<T = any> extends NSTableView {
      alloc<R = MSArtboardPresetsTableView>(): R;
      new: <R = MSArtboardPresetsTableView>() => R;
    }
  }
}

declare const MSArtboardPresetsTableView: cocoa.classes.MSArtboardPresetsTableView;
