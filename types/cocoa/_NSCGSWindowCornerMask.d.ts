/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowCornerMask<T = any> extends cocoa.NSCGSWindowCornerMask {
    center<R = cocoa.CGRect>(): R;
    imageScale<R = number>(): R;
    image<R = cocoa.CGImage>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowCornerMask<T = any> extends cocoa.classes.NSCGSWindowCornerMask {
      alloc<R = _NSCGSWindowCornerMask>(): R;
      new: <R = _NSCGSWindowCornerMask>() => R;
    }
  }
}
