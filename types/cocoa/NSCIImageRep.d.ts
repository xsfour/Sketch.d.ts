/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCIImageRep<T = any> extends NSImageRep {
    initWithCIImage<R = unknown, P0 = unknown>(_initWithCIImage: P0): R;
    CIImage<R = CIImage>(): R;
  }
  namespace classes {
    export interface NSCIImageRep<T = any> extends NSImageRep {
      alloc<R = NSCIImageRep>(): R;
      new: <R = NSCIImageRep>() => R;
      imageRepWithCIImage<R = unknown, P0 = unknown>(_imageRepWithCIImage: P0): R;
    }
  }
}

declare const NSCIImageRep: cocoa.classes.NSCIImageRep;
