/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownComboBox<T = any> extends cocoa.NSComboBox, cocoa.NSTextViewDelegateProtocol, cocoa.MSUpDownProtocolProtocol {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    minimumIncrementValue<R = number>(): R;
    setMinimumIncrementValue<R = void, P0 = number>(_v: P0): R;
    upDownController<R = cocoa.MSUpDownController>(): R;
    setUpDownController<R = void, P0 = cocoa.MSUpDownController>(_v: P0): R;
    refreshDelegate<R = unknown>(): R;
    setRefreshDelegate<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSUpDownComboBox<T = any> extends cocoa.classes.NSComboBox, cocoa.classes.NSTextViewDelegateProtocol, cocoa.classes.MSUpDownProtocolProtocol {
      alloc<R = MSUpDownComboBox>(): R;
      new: <R = MSUpDownComboBox>() => R;
    }
  }
}

declare const MSUpDownComboBox: cocoa.classes.MSUpDownComboBox;
