/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFontAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    changeTextLayerFont<R = void, P0 = unknown>(_changeTextLayerFont: P0): R;
  }
  namespace classes {
    export interface MSChangeFontAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSChangeFontAction>(): R;
      new: <R = MSChangeFontAction>() => R;
    }
  }
}

declare const MSChangeFontAction: cocoa.classes.MSChangeFontAction;
