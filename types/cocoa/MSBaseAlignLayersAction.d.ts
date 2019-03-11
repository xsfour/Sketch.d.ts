/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseAlignLayersAction<T = any> extends cocoa.MSDocumentAction, cocoa.MSAltButtonTargetProtocol {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    alignVectorPointsToKey<R = void, P0 = unknown>(_alignVectorPointsToKey: P0): R;
    canAlignToArtboardInstead<R = boolean>(): R;
    alignToKey<R = void, P0 = unknown>(_alignToKey: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBaseAlignLayersAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.MSAltButtonTargetProtocol {
      alloc<R = MSBaseAlignLayersAction>(): R;
      new: <R = MSBaseAlignLayersAction>() => R;
    }
  }
}

declare const MSBaseAlignLayersAction: cocoa.classes.MSBaseAlignLayersAction;
