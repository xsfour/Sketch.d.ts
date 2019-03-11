/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIconRefBitmapImageRep<T = any> extends cocoa.NSBitmapImageRep {
    bitmapData<R = string>(): R;
    TIFFRepresentation<R = unknown>(): R;
    CGImage<R = cocoa.CGImage>(): R;
    _ensureBitmapDataAvailable<R = void>(): R;
    iconRef<R = cocoa.OpaqueIconRef>(): R;
    initWithIconRef_size<R = unknown, P0 = cocoa.OpaqueIconRef, P1 = cocoa.CGSize>(_initWithIconRef: P0, _size: P1): R;
    initWithIconRef_sizeIdentifier_scaleIdentifier<R = unknown, P0 = cocoa.OpaqueIconRef, P1 = number, P2 = number>(_initWithIconRef: P0, _sizeIdentifier: P1, _scaleIdentifier: P2): R;
  }
  namespace classes {
    export interface NSIconRefBitmapImageRep<T = any> extends cocoa.classes.NSBitmapImageRep {
      alloc<R = NSIconRefBitmapImageRep>(): R;
      new: <R = NSIconRefBitmapImageRep>() => R;
    }
  }
}

declare const NSIconRefBitmapImageRep: cocoa.classes.NSIconRefBitmapImageRep;
