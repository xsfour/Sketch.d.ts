/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPencilAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    isActive<R = boolean>(): R;
    preferredMenuAction<R = string>(): R;
    pencil<R = void, P0 = unknown>(_pencil: P0): R;
  }
  namespace classes {
    export interface MSPencilAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSPencilAction>(): R;
      new: <R = MSPencilAction>() => R;
    }
  }
}

declare const MSPencilAction: cocoa.classes.MSPencilAction;
