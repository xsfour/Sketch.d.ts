/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarEscapeKeyView<T = any> extends NSView, NSISEngineDelegateProtocol {
    cxx_destruct<R = void>(): R;
    preferredDelegate<R = NSTouchBarEscapeKeyViewController>(): R;
    setPreferredDelegate<R = void, P0 = NSTouchBarEscapeKeyViewController>(_v: P0): R;
    oldDelegate<R = NSISEngineDelegate>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarEscapeKeyView<T = any> extends NSView, NSISEngineDelegateProtocol {
      alloc<R = NSTouchBarEscapeKeyView>(): R;
      new: <R = NSTouchBarEscapeKeyView>() => R;
    }
  }
}

declare const NSTouchBarEscapeKeyView: cocoa.classes.NSTouchBarEscapeKeyView;
