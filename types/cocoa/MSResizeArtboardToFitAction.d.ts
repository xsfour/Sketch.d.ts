/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeArtboardToFitAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    shouldResizeArtboard_toFitRect<R = boolean, P0 = unknown, P1 = CGRect>(_shouldResizeArtboard: P0, _toFitRect: P1): R;
    resizeArtboardToFit<R = void, P0 = unknown>(_resizeArtboardToFit: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSResizeArtboardToFitAction<T = any> extends MSDocumentAction {
      alloc<R = MSResizeArtboardToFitAction>(): R;
      new: <R = MSResizeArtboardToFitAction>() => R;
    }
  }
}

declare const MSResizeArtboardToFitAction: cocoa.classes.MSResizeArtboardToFitAction;
