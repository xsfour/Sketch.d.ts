/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSFence<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol, cocoa.NSCopyingProtocol {
    invalidate<R = void>(): R;
    set<R = void>(): R;
    dealloc<R = void>(): R;
    initWithSendRight<R = unknown, P0 = cocoa._mach_right_send>(_initWithSendRight: P0): R;
    sendRight<R = cocoa._mach_right_send>(): R;
    valid<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCGSFence<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSCGSFence>(): R;
      new: <R = NSCGSFence>() => R;
      supportsSecureCoding<R = boolean>(): R;
      fence<R = unknown>(): R;
    }
  }
}

declare const NSCGSFence: cocoa.classes.NSCGSFence;
