/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSFence<T = any> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
    invalidate<R = void>(): R;
    set<R = void>(): R;
    dealloc<R = void>(): R;
    initWithSendRight<R = unknown, P0 = _mach_right_send>(_initWithSendRight: P0): R;
    sendRight<R = _mach_right_send>(): R;
    valid<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCGSFence<T = any> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
      alloc<R = NSCGSFence>(): R;
      new: <R = NSCGSFence>() => R;
      supportsSecureCoding<R = boolean>(): R;
      fence<R = unknown>(): R;
    }
  }
}

declare const NSCGSFence: cocoa.classes.NSCGSFence;
