/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTabButtonAccessibilityHelper<T = any> extends NSView, NSAccessibilityRadioButtonProtocol {
    cxx_destruct<R = void>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    initWithTabButton<R = unknown, P0 = unknown>(_initWithTabButton: P0): R;
    parentTabButton<R = NSTabButton>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTabButtonAccessibilityHelper<T = any> extends NSView, NSAccessibilityRadioButtonProtocol {
      alloc<R = _NSTabButtonAccessibilityHelper>(): R;
      new: <R = _NSTabButtonAccessibilityHelper>() => R;
    }
  }
}
