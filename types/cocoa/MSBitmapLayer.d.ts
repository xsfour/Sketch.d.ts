/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayer<T = any> extends cocoa._MSBitmapLayer, cocoa.MSImageOwnerProtocol {
    correctInvalidGamma<R = void>(): R;
    resizeToOriginalSize<R = void>(): R;
    originalSize<R = cocoa.CGSize>(): R;
    isAtOriginalSize<R = boolean>(): R;
    NSImage<R = unknown>(): R;
    reduceImageSize<R = void>(): R;
    replaceImageWithImage<R = void, P0 = unknown>(_replaceImageWithImage: P0): R;
    handlerName<R = unknown>(): R;
    initWithFrame_image<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _image: P1): R;
    handlerClass<R = unknown>(): R;
    inspectorSections<R = unknown>(): R;
    canChangeBooleanOperation<R = boolean>(): R;
    canReduceImageSize<R = boolean>(): R;
    targetSizeForReduction<R = cocoa.CGSize>(): R;
    image<R = cocoa.MSImageData>(): R;
    setImage<R = void, P0 = cocoa.MSImageData>(_v: P0): R;
  }
  namespace classes {
    export interface MSBitmapLayer<T = any> extends cocoa.classes._MSBitmapLayer, cocoa.classes.MSImageOwnerProtocol {
      alloc<R = MSBitmapLayer>(): R;
      new: <R = MSBitmapLayer>() => R;
    }
  }
}

declare const MSBitmapLayer: cocoa.classes.MSBitmapLayer;
