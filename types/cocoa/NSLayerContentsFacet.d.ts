/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayerContentsFacet<T = any> extends cocoa.NSObject {
    totalSize<R = number>(): R;
    dropToImage<R = void>(): R;
    dealloc<R = void>(): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    drawingRect<R = cocoa.CGRect>(): R;
    setDrawingRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    contentsScale<R = number>(): R;
    setContentsScale<R = void, P0 = number>(_v: P0): R;
    contentsCenter<R = cocoa.CGRect>(): R;
    setContentsCenter<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    contents<R = unknown>(): R;
    setContents<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSLayerContentsFacet<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSLayerContentsFacet>(): R;
      new: <R = NSLayerContentsFacet>() => R;
    }
  }
}

declare const NSLayerContentsFacet: cocoa.classes.NSLayerContentsFacet;
