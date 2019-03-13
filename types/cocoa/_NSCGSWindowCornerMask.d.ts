/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowCornerMask<T = any> extends NSCGSWindowCornerMask {
    center<R = CGRect>(): R;
    imageScale<R = number>(): R;
    image<R = CGImage>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowCornerMask<T = any> extends NSCGSWindowCornerMask {
      alloc<R = _NSCGSWindowCornerMask>(): R;
      new: <R = _NSCGSWindowCornerMask>() => R;
    }
  }
}
