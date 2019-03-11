/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeColorSpaceAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    refreshColorSpaceDependentUI<R = void>(): R;
  }
  namespace classes {
    export interface MSChangeColorSpaceAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSChangeColorSpaceAction>(): R;
      new: <R = MSChangeColorSpaceAction>() => R;
    }
  }
}

declare const MSChangeColorSpaceAction: cocoa.classes.MSChangeColorSpaceAction;
