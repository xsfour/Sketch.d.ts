/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowBackingStore<T = any> extends cocoa.NSObject {
    makeDrawingContext<R = cocoa.CGContext>(): R;
    revalidateWithDrawingHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_revalidateWithDrawingHandler: P0): R;
    invalidateRect<R = void, P0 = cocoa.CGRect>(_invalidateRect: P0): R;
    imageInRect<R = cocoa.CGImage, P0 = cocoa.CGRect>(_imageInRect: P0): R;
    invalidateAlphaShape<R = void>(): R;
    colorSpace<R = cocoa.CGColorSpace>(): R;
    setColorSpace<R = void, P0 = cocoa.CGColorSpace>(_v: P0): R;
    depth<R = number>(): R;
    setDepth<R = void, P0 = number>(_v: P0): R;
    keepsExcessAllocation<R = boolean>(): R;
    setKeepsExcessAllocation<R = void, P0 = boolean>(_v: P0): R;
    opaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    size<R = cocoa.CGSize>(): R;
    workingColorSpace<R = cocoa.CGColorSpace>(): R;
    setWorkingColorSpace<R = void, P0 = cocoa.CGColorSpace>(_v: P0): R;
    workingDepth<R = number>(): R;
    setWorkingDepth<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSCGSWindowBackingStore<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSWindowBackingStore>(): R;
      new: <R = NSCGSWindowBackingStore>() => R;
      backingStoreWithWindowID<R = unknown, P0 = number>(_backingStoreWithWindowID: P0): R;
    }
  }
}

declare const NSCGSWindowBackingStore: cocoa.classes.NSCGSWindowBackingStore;
