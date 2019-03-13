/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPrintAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    makeArtboardBeforePrinting<R = void, P0 = unknown>(_makeArtboardBeforePrinting: P0): R;
    validate<R = boolean>(): R;
    hasDynamicTitle<R = boolean>(): R;
    menuItemsForPage<R = unknown, P0 = unknown>(_menuItemsForPage: P0): R;
    addMenuItems_toMenu<R = void, P0 = unknown, P1 = unknown>(_addMenuItems: P0, _toMenu: P1): R;
  }
  namespace classes {
    export interface MSPrintAction<T = any> extends MSDocumentAction {
      alloc<R = MSPrintAction>(): R;
      new: <R = MSPrintAction>() => R;
    }
  }
}

declare const MSPrintAction: cocoa.classes.MSPrintAction;
