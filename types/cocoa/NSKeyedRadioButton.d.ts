/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyedRadioButton<T = any> extends NSButton {
    activateRadioAction<R = void, P0 = unknown>(_activateRadioAction: P0): R;
    valueToSet<R = unknown>(): R;
    setValueToSet<R = void, P0 = unknown>(_v: P0): R;
    keyPath<R = NSString>(): R;
    setKeyPath<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSKeyedRadioButton<T = any> extends NSButton {
      alloc<R = NSKeyedRadioButton>(): R;
      new: <R = NSKeyedRadioButton>() => R;
    }
  }
}

declare const NSKeyedRadioButton: cocoa.classes.NSKeyedRadioButton;
