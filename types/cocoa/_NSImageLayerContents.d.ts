/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageLayerContents<T = any> extends cocoa.NSObject {
    CA_copyRenderValue<R = void>(): R;
    CA_prepareRenderValue<R = void>(): R;
    dealloc<R = void>(): R;
    replacementObjectForCoder<R = unknown, P0 = unknown>(_replacementObjectForCoder: P0): R;
    _CGImageWithColorSpace<R = cocoa.CGImage, P0 = cocoa.CGColorSpace>(__CGImageWithColorSpace: P0): R;
    initWithImage_scaleFactor<R = unknown, P0 = unknown, P1 = number>(_initWithImage: P0, _scaleFactor: P1): R;
  }
  namespace classes {
    export interface _NSImageLayerContents<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSImageLayerContents>(): R;
      new: <R = _NSImageLayerContents>() => R;
    }
  }
}
