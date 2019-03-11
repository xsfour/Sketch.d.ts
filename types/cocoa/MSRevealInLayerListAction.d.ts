/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRevealInLayerListAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    revealInLayerList<R = void, P0 = unknown>(_revealInLayerList: P0): R;
  }
  namespace classes {
    export interface MSRevealInLayerListAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSRevealInLayerListAction>(): R;
      new: <R = MSRevealInLayerListAction>() => R;
    }
  }
}

declare const MSRevealInLayerListAction: cocoa.classes.MSRevealInLayerListAction;
