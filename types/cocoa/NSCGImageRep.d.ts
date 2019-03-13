/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGImageRep<T = any> extends NSImageRep {
    CGImage<R = CGImage>(): R;
    initWithFocusedViewRect<R = unknown, P0 = CGRect>(_initWithFocusedViewRect: P0): R;
    initWithCGImage_size<R = unknown, P0 = CGImage, P1 = CGSize>(_initWithCGImage: P0, _size: P1): R;
    initWithCGImage<R = unknown, P0 = CGImage>(_initWithCGImage: P0): R;
  }
  namespace classes {
    export interface NSCGImageRep<T = any> extends NSImageRep {
      alloc<R = NSCGImageRep>(): R;
      new: <R = NSCGImageRep>() => R;
    }
  }
}

declare const NSCGImageRep: cocoa.classes.NSCGImageRep;
