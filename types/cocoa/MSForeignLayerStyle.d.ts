/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignLayerStyle<T = any> extends _MSForeignLayerStyle {
    tooltipForObject_MSAssetSyncSheetObject<R = unknown, P0 = MSModelObject>(_tooltipForObject_MSAssetSyncSheetObject: P0): R;
    type_MSAssetSyncSheetObject<R = number>(): R;
  }
  namespace classes {
    export interface MSForeignLayerStyle<T = any> extends _MSForeignLayerStyle {
      alloc<R = MSForeignLayerStyle>(): R;
      new: <R = MSForeignLayerStyle>() => R;
    }
  }
}

declare const MSForeignLayerStyle: cocoa.classes.MSForeignLayerStyle;
