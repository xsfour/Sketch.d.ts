/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverFramePrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
    cachedImageMask<R = NSImage>(): R;
    setCachedImageMask<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface _NSPopoverFramePrivateData<T = any> extends NSObject {
      alloc<R = _NSPopoverFramePrivateData>(): R;
      new: <R = _NSPopoverFramePrivateData>() => R;
    }
  }
}
