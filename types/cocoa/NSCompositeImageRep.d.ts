/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompositeImageRep<T = any> extends cocoa.NSImageRep {
    initWithBaseImage_overlayImage_overlayFrame<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect>(_initWithBaseImage: P0, _overlayImage: P1, _overlayFrame: P2): R;
    overlayFrame<R = cocoa.CGRect>(): R;
    overlayImage<R = cocoa.NSImage>(): R;
    baseImage<R = cocoa.NSImage>(): R;
  }
  namespace classes {
    export interface NSCompositeImageRep<T = any> extends cocoa.classes.NSImageRep {
      alloc<R = NSCompositeImageRep>(): R;
      new: <R = NSCompositeImageRep>() => R;
    }
  }
}

declare const NSCompositeImageRep: cocoa.classes.NSCompositeImageRep;
