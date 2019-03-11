/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEditorProtocol<T = any> extends cocoa.NSObjectProtocol {
    commitEditingAndReturnError<R = boolean, P0 = unknown>(_commitEditingAndReturnError: P0): R;
    commitEditingWithDelegate_didCommitSelector_contextInfo<R = void, P0 = unknown, P1 = string, P2 = void>(_commitEditingWithDelegate: P0, _didCommitSelector: P1, _contextInfo: P2): R;
    commitEditing<R = boolean>(): R;
    discardEditing<R = void>(): R;
  }
  namespace classes {
    export interface NSEditorProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSEditorProtocol: cocoa.classes.NSEditorProtocol;
