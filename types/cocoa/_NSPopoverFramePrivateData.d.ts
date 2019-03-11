/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverFramePrivateData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    cachedImageMask<R = cocoa.NSImage>(): R;
    setCachedImageMask<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface _NSPopoverFramePrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPopoverFramePrivateData>(): R;
      new: <R = _NSPopoverFramePrivateData>() => R;
    }
  }
}
