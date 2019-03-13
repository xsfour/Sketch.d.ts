/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSnapshotBitmapGraphicsContext<T = any> extends NSBitmapGraphicsContext {
    retainedCGImage<R = CGImage>(): R;
    backingData<R = NSMutableData>(): R;
    setBackingData<R = void, P0 = NSMutableData>(_v: P0): R;
    signature<R = NSSnapshotContextSignature>(): R;
    setSignature<R = void, P0 = NSSnapshotContextSignature>(_v: P0): R;
  }
  namespace classes {
    export interface NSSnapshotBitmapGraphicsContext<T = any> extends NSBitmapGraphicsContext {
      alloc<R = NSSnapshotBitmapGraphicsContext>(): R;
      new: <R = NSSnapshotBitmapGraphicsContext>() => R;
    }
  }
}

declare const NSSnapshotBitmapGraphicsContext: cocoa.classes.NSSnapshotBitmapGraphicsContext;
