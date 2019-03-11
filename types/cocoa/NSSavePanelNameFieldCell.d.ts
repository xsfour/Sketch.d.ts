/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSavePanelNameFieldCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface NSSavePanelNameFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSSavePanelNameFieldCell>(): R;
      new: <R = NSSavePanelNameFieldCell>() => R;
    }
  }
}

declare const NSSavePanelNameFieldCell: cocoa.classes.NSSavePanelNameFieldCell;
