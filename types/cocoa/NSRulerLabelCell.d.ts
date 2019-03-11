/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerLabelCell<T = any> extends cocoa.NSTextFieldCell {
    _setAuxiliaryFormatter<R = void, P0 = unknown>(__setAuxiliaryFormatter: P0): R;
    _auxiliaryFormatter<R = unknown>(): R;
  }
  namespace classes {
    export interface NSRulerLabelCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSRulerLabelCell>(): R;
      new: <R = NSRulerLabelCell>() => R;
    }
  }
}

declare const NSRulerLabelCell: cocoa.classes.NSRulerLabelCell;
