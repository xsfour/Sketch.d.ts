/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataMenuAction<T = any> extends MSDocumentAction {
    addHeaderToMenu_withTitle<R = void, P0 = unknown, P1 = unknown>(_addHeaderToMenu: P0, _withTitle: P1): R;
    mayShowInToolbar<R = boolean>(): R;
    isSelectable<R = boolean>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    hasSubMenu<R = boolean>(): R;
    dataMenuProvider<R = MSDataMenuProvider>(): R;
  }
  namespace classes {
    export interface MSDataMenuAction<T = any> extends MSDocumentAction {
      alloc<R = MSDataMenuAction>(): R;
      new: <R = MSDataMenuAction>() => R;
    }
  }
}

declare const MSDataMenuAction: cocoa.classes.MSDataMenuAction;
