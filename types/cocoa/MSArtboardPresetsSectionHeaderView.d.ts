/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsSectionHeaderView<T = any> extends cocoa.NSTableCellView {}
  namespace classes {
    export interface MSArtboardPresetsSectionHeaderView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSArtboardPresetsSectionHeaderView>(): R;
      new: <R = MSArtboardPresetsSectionHeaderView>() => R;
    }
  }
}

declare const MSArtboardPresetsSectionHeaderView: cocoa.classes.MSArtboardPresetsSectionHeaderView;
