/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmartRotateAction<T = any> extends cocoa.MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    validate<R = boolean>(): R;
    smartRotate<R = void, P0 = unknown>(_smartRotate: P0): R;
  }
  namespace classes {
    export interface MSSmartRotateAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSSmartRotateAction>(): R;
      new: <R = MSSmartRotateAction>() => R;
    }
  }
}

declare const MSSmartRotateAction: cocoa.classes.MSSmartRotateAction;
