/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataMenuAction<T = any> extends cocoa.MSDocumentAction {
    addHeaderToMenu_withTitle<R = void, P0 = unknown, P1 = unknown>(_addHeaderToMenu: P0, _withTitle: P1): R;
    mayShowInToolbar<R = boolean>(): R;
    isSelectable<R = boolean>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    hasSubMenu<R = boolean>(): R;
    dataMenuProvider<R = cocoa.MSDataMenuProvider>(): R;
  }
  namespace classes {
    export interface MSDataMenuAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSDataMenuAction>(): R;
      new: <R = MSDataMenuAction>() => R;
    }
  }
}

declare const MSDataMenuAction: cocoa.classes.MSDataMenuAction;
