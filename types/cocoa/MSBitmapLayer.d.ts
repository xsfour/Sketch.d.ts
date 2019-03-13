/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayer<T = any> extends _MSBitmapLayer, MSImageOwnerProtocol {
    correctInvalidGamma<R = void>(): R;
    resizeToOriginalSize<R = void>(): R;
    originalSize<R = CGSize>(): R;
    isAtOriginalSize<R = boolean>(): R;
    NSImage<R = unknown>(): R;
    reduceImageSize<R = void>(): R;
    replaceImageWithImage<R = void, P0 = unknown>(_replaceImageWithImage: P0): R;
    handlerName<R = unknown>(): R;
    initWithFrame_image<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _image: P1): R;
    handlerClass<R = unknown>(): R;
    inspectorSections<R = unknown>(): R;
    canChangeBooleanOperation<R = boolean>(): R;
    canReduceImageSize<R = boolean>(): R;
    targetSizeForReduction<R = CGSize>(): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
  }
  namespace classes {
    export interface MSBitmapLayer<T = any> extends _MSBitmapLayer, MSImageOwnerProtocol {
      alloc<R = MSBitmapLayer>(): R;
      new: <R = MSBitmapLayer>() => R;
    }
  }
}

declare const MSBitmapLayer: cocoa.classes.MSBitmapLayer;
