/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArtboardEventHandler<T = any> extends cocoa.MSInsertLayerEventHandler {
    shouldAddInsertFromSelectionItem<R = boolean>(): R;
    updateInspector<R = void>(): R;
    insertArtboardWithRect<R = unknown, P0 = cocoa.CGRect>(_insertArtboardWithRect: P0): R;
    newPositionForFirstArtboardWithSize<R = cocoa.CGRect, P0 = cocoa.CGSize>(_newPositionForFirstArtboardWithSize: P0): R;
    initialRectForNewArtboard_besidesExistingArtboard<R = cocoa.CGRect, P0 = cocoa.CGSize, P1 = unknown>(_initialRectForNewArtboard: P0, _besidesExistingArtboard: P1): R;
    newPositionForSecondArtboardWithSize<R = cocoa.CGRect, P0 = cocoa.CGSize>(_newPositionForSecondArtboardWithSize: P0): R;
    rectForArtboardWithPreset<R = cocoa.CGRect, P0 = unknown>(_rectForArtboardWithPreset: P0): R;
    insertArtboardFromPreset<R = void, P0 = unknown>(_insertArtboardFromPreset: P0): R;
    title<R = unknown>(): R;
    insertedArtboards<R = cocoa.NSMutableArray>(): R;
    inspectorViewController<R = cocoa.MSInsertArtboardInspectorViewController>(): R;
  }
  namespace classes {
    export interface MSInsertArtboardEventHandler<T = any> extends cocoa.classes.MSInsertLayerEventHandler {
      alloc<R = MSInsertArtboardEventHandler>(): R;
      new: <R = MSInsertArtboardEventHandler>() => R;
    }
  }
}

declare const MSInsertArtboardEventHandler: cocoa.classes.MSInsertArtboardEventHandler;
