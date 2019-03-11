/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTabButtonAccessibilityHelper<T = any> extends cocoa.NSView, cocoa.NSAccessibilityRadioButtonProtocol {
    cxx_destruct<R = void>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    initWithTabButton<R = unknown, P0 = unknown>(_initWithTabButton: P0): R;
    parentTabButton<R = cocoa.NSTabButton>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTabButtonAccessibilityHelper<T = any> extends cocoa.classes.NSView, cocoa.classes.NSAccessibilityRadioButtonProtocol {
      alloc<R = _NSTabButtonAccessibilityHelper>(): R;
      new: <R = _NSTabButtonAccessibilityHelper>() => R;
    }
  }
}
