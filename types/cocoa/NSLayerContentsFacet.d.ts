/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayerContentsFacet<T = any> extends NSObject {
    totalSize<R = number>(): R;
    dropToImage<R = void>(): R;
    dealloc<R = void>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    drawingRect<R = CGRect>(): R;
    setDrawingRect<R = void, P0 = CGRect>(_v: P0): R;
    contentsScale<R = number>(): R;
    setContentsScale<R = void, P0 = number>(_v: P0): R;
    contentsCenter<R = CGRect>(): R;
    setContentsCenter<R = void, P0 = CGRect>(_v: P0): R;
    contents<R = unknown>(): R;
    setContents<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSLayerContentsFacet<T = any> extends NSObject {
      alloc<R = NSLayerContentsFacet>(): R;
      new: <R = NSLayerContentsFacet>() => R;
    }
  }
}

declare const NSLayerContentsFacet: cocoa.classes.NSLayerContentsFacet;
