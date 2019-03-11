/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarModel<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    addWarning<R = void, P0 = unknown>(_addWarning: P0): R;
    hash<R = number>(): R;
    isSuppressed<R = boolean>(): R;
    setIsSuppressed<R = void, P0 = boolean>(_v: P0): R;
    warnings<R = cocoa.NSArray>(): R;
    touchBar<R = cocoa.NSTouchBar>(): R;
    setTouchBar<R = void, P0 = cocoa.NSTouchBar>(_v: P0): R;
    responderDescription<R = cocoa.NSString>(): R;
    setResponderDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    className<R = cocoa.NSString>(): R;
    setClassName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    address<R = void>(): R;
    setAddress<R = void, P0 = void>(_v: P0): R;
    prettyDescription<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSDebugTouchBarModel<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDebugTouchBarModel>(): R;
      new: <R = NSDebugTouchBarModel>() => R;
    }
  }
}

declare const NSDebugTouchBarModel: cocoa.classes.NSDebugTouchBarModel;
