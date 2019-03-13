/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCenterSelectionInVisibleAreaAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    centerCanvasSelectionInVisibleArea<R = void, P0 = unknown>(_centerCanvasSelectionInVisibleArea: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSCenterSelectionInVisibleAreaAction<T = any> extends MSDocumentAction {
      alloc<R = MSCenterSelectionInVisibleAreaAction>(): R;
      new: <R = MSCenterSelectionInVisibleAreaAction>() => R;
    }
  }
}

declare const MSCenterSelectionInVisibleAreaAction: cocoa.classes.MSCenterSelectionInVisibleAreaAction;
