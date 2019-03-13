/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignTextStyle<T = any> extends _MSForeignTextStyle {
    tooltipForObject_MSAssetSyncSheetObject<R = unknown, P0 = unknown>(_tooltipForObject_MSAssetSyncSheetObject: P0): R;
    type_MSAssetSyncSheetObject<R = number>(): R;
  }
  namespace classes {
    export interface MSForeignTextStyle<T = any> extends _MSForeignTextStyle {
      alloc<R = MSForeignTextStyle>(): R;
      new: <R = MSForeignTextStyle>() => R;
    }
  }
}

declare const MSForeignTextStyle: cocoa.classes.MSForeignTextStyle;
