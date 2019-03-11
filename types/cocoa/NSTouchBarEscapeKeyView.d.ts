/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarEscapeKeyView<T = any> extends cocoa.NSView, cocoa.NSISEngineDelegateProtocol {
    cxx_destruct<R = void>(): R;
    preferredDelegate<R = cocoa.NSTouchBarEscapeKeyViewController>(): R;
    setPreferredDelegate<R = void, P0 = cocoa.NSTouchBarEscapeKeyViewController>(_v: P0): R;
    oldDelegate<R = cocoa.NSISEngineDelegate>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarEscapeKeyView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSISEngineDelegateProtocol {
      alloc<R = NSTouchBarEscapeKeyView>(): R;
      new: <R = NSTouchBarEscapeKeyView>() => R;
    }
  }
}

declare const NSTouchBarEscapeKeyView: cocoa.classes.NSTouchBarEscapeKeyView;
