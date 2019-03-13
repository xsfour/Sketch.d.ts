/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorStylePopUpCell<T = any> extends MSInspectorPopUpButtonCell {}
  namespace classes {
    export interface MSInspectorStylePopUpCell<T = any> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorStylePopUpCell>(): R;
      new: <R = MSInspectorStylePopUpCell>() => R;
    }
  }
}

declare const MSInspectorStylePopUpCell: cocoa.classes.MSInspectorStylePopUpCell;
