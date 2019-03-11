/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowCornerMask<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSMutableCopyingProtocol {
    windowCornerMaskWithScale<R = unknown, P0 = number>(_windowCornerMaskWithScale: P0): R;
    center<R = cocoa.CGRect>(): R;
    image<R = cocoa.CGImage>(): R;
    imageScale<R = number>(): R;
  }
  namespace classes {
    export interface NSCGSWindowCornerMask<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSMutableCopyingProtocol {
      alloc<R = NSCGSWindowCornerMask>(): R;
      new: <R = NSCGSWindowCornerMask>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSCGSWindowCornerMask: cocoa.classes.NSCGSWindowCornerMask;
