/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCIImageRep<T = any> extends cocoa.NSImageRep {
    initWithCIImage<R = unknown, P0 = unknown>(_initWithCIImage: P0): R;
    CIImage<R = cocoa.CIImage>(): R;
  }
  namespace classes {
    export interface NSCIImageRep<T = any> extends cocoa.classes.NSImageRep {
      alloc<R = NSCIImageRep>(): R;
      new: <R = NSCIImageRep>() => R;
      imageRepWithCIImage<R = unknown, P0 = unknown>(_imageRepWithCIImage: P0): R;
    }
  }
}

declare const NSCIImageRep: cocoa.classes.NSCIImageRep;
