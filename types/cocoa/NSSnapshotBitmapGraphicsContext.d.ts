/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSnapshotBitmapGraphicsContext<T = any> extends cocoa.NSBitmapGraphicsContext {
    retainedCGImage<R = cocoa.CGImage>(): R;
    backingData<R = cocoa.NSMutableData>(): R;
    setBackingData<R = void, P0 = cocoa.NSMutableData>(_v: P0): R;
    signature<R = cocoa.NSSnapshotContextSignature>(): R;
    setSignature<R = void, P0 = cocoa.NSSnapshotContextSignature>(_v: P0): R;
  }
  namespace classes {
    export interface NSSnapshotBitmapGraphicsContext<T = any> extends cocoa.classes.NSBitmapGraphicsContext {
      alloc<R = NSSnapshotBitmapGraphicsContext>(): R;
      new: <R = NSSnapshotBitmapGraphicsContext>() => R;
    }
  }
}

declare const NSSnapshotBitmapGraphicsContext: cocoa.classes.NSSnapshotBitmapGraphicsContext;
