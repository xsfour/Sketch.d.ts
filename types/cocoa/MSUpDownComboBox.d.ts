/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownComboBox<T = any> extends NSComboBox, NSTextViewDelegateProtocol, MSUpDownProtocolProtocol {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    minimumIncrementValue<R = number>(): R;
    setMinimumIncrementValue<R = void, P0 = number>(_v: P0): R;
    upDownController<R = MSUpDownController>(): R;
    setUpDownController<R = void, P0 = MSUpDownController>(_v: P0): R;
    refreshDelegate<R = unknown>(): R;
    setRefreshDelegate<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSUpDownComboBox<T = any> extends NSComboBox, NSTextViewDelegateProtocol, MSUpDownProtocolProtocol {
      alloc<R = MSUpDownComboBox>(): R;
      new: <R = MSUpDownComboBox>() => R;
    }
  }
}

declare const MSUpDownComboBox: cocoa.classes.MSUpDownComboBox;
