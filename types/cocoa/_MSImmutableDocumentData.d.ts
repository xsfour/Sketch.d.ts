/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableDocumentData<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    pages<R = cocoa.NSArray>(): R;
    setPages<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    layerTextStyles<R = cocoa.MSImmutableSharedTextStyleContainer>(): R;
    setLayerTextStyles<R = void, P0 = cocoa.MSImmutableSharedTextStyleContainer>(_v: P0): R;
    layerSymbols<R = cocoa.MSImmutableSymbolContainer>(): R;
    setLayerSymbols<R = void, P0 = cocoa.MSImmutableSymbolContainer>(_v: P0): R;
    layerStyles<R = cocoa.MSImmutableSharedStyleContainer>(): R;
    setLayerStyles<R = void, P0 = cocoa.MSImmutableSharedStyleContainer>(_v: P0): R;
    foreignTextStyles<R = cocoa.NSArray>(): R;
    setForeignTextStyles<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    foreignSymbols<R = cocoa.NSArray>(): R;
    setForeignSymbols<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    foreignLayerStyles<R = cocoa.NSArray>(): R;
    setForeignLayerStyles<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    assets<R = cocoa.MSImmutableAssetCollection>(): R;
    setAssets<R = void, P0 = cocoa.MSImmutableAssetCollection>(_v: P0): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    setUserInfo<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    currentPageIndex<R = number>(): R;
    setCurrentPageIndex<R = void, P0 = number>(_v: P0): R;
    colorSpace<R = number>(): R;
    setColorSpace<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableDocumentData<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableDocumentData>(): R;
      new: <R = _MSImmutableDocumentData>() => R;
    }
  }
}
