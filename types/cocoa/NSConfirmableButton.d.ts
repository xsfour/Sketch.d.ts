/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConfirmableButton<T = any> extends NSButton {
    confirmCheckBox<R = void, P0 = unknown>(_confirmCheckBox: P0): R;
    _askForConfirmation_completion<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__askForConfirmation: P0, _completion: P1): R;
    keyPath<R = NSString>(): R;
    setKeyPath<R = void, P0 = NSString>(_v: P0): R;
    falseConfirmation<R = NSDictionary>(): R;
    setFalseConfirmation<R = void, P0 = NSDictionary>(_v: P0): R;
    trueConfirmation<R = NSDictionary>(): R;
    setTrueConfirmation<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSConfirmableButton<T = any> extends NSButton {
      alloc<R = NSConfirmableButton>(): R;
      new: <R = NSConfirmableButton>() => R;
    }
  }
}

declare const NSConfirmableButton: cocoa.classes.NSConfirmableButton;
