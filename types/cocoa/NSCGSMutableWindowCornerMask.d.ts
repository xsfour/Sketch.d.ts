/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSMutableWindowCornerMask<T = any> extends cocoa.NSCGSWindowCornerMask {
    center<R = cocoa.CGRect>(): R;
    setCenter<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    image<R = cocoa.CGImage>(): R;
    setImage<R = void, P0 = cocoa.CGImage>(_v: P0): R;
    imageScale<R = number>(): R;
    setImageScale<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSCGSMutableWindowCornerMask<T = any> extends cocoa.classes.NSCGSWindowCornerMask {
      alloc<R = NSCGSMutableWindowCornerMask>(): R;
      new: <R = NSCGSMutableWindowCornerMask>() => R;
    }
  }
}

declare const NSCGSMutableWindowCornerMask: cocoa.classes.NSCGSMutableWindowCornerMask;
