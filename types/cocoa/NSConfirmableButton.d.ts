/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConfirmableButton<T = any> extends cocoa.NSButton {
    confirmCheckBox<R = void, P0 = unknown>(_confirmCheckBox: P0): R;
    _askForConfirmation_completion<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__askForConfirmation: P0, _completion: P1): R;
    keyPath<R = cocoa.NSString>(): R;
    setKeyPath<R = void, P0 = cocoa.NSString>(_v: P0): R;
    falseConfirmation<R = cocoa.NSDictionary>(): R;
    setFalseConfirmation<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    trueConfirmation<R = cocoa.NSDictionary>(): R;
    setTrueConfirmation<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSConfirmableButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = NSConfirmableButton>(): R;
      new: <R = NSConfirmableButton>() => R;
    }
  }
}

declare const NSConfirmableButton: cocoa.classes.NSConfirmableButton;
