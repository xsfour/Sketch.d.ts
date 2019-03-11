/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGImageRep<T = any> extends cocoa.NSImageRep {
    CGImage<R = cocoa.CGImage>(): R;
    initWithFocusedViewRect<R = unknown, P0 = cocoa.CGRect>(_initWithFocusedViewRect: P0): R;
    initWithCGImage_size<R = unknown, P0 = cocoa.CGImage, P1 = cocoa.CGSize>(_initWithCGImage: P0, _size: P1): R;
    initWithCGImage<R = unknown, P0 = cocoa.CGImage>(_initWithCGImage: P0): R;
  }
  namespace classes {
    export interface NSCGImageRep<T = any> extends cocoa.classes.NSImageRep {
      alloc<R = NSCGImageRep>(): R;
      new: <R = NSCGImageRep>() => R;
    }
  }
}

declare const NSCGImageRep: cocoa.classes.NSCGImageRep;
