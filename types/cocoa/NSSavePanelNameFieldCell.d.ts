/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSavePanelNameFieldCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface NSSavePanelNameFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = NSSavePanelNameFieldCell>(): R;
      new: <R = NSSavePanelNameFieldCell>() => R;
    }
  }
}

declare const NSSavePanelNameFieldCell: cocoa.classes.NSSavePanelNameFieldCell;
