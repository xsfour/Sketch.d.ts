/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResetOriginAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    resetRulerOrigin<R = void, P0 = unknown>(_resetRulerOrigin: P0): R;
  }
  namespace classes {
    export interface MSResetOriginAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSResetOriginAction>(): R;
      new: <R = MSResetOriginAction>() => R;
    }
  }
}

declare const MSResetOriginAction: cocoa.classes.MSResetOriginAction;
