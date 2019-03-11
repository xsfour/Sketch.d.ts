/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewAsynchronousPreparationInputParameters<T = any> extends cocoa.NSObject, cocoa._NSAsynchronousPreparationInputParametersProtocol {
    dealloc<R = void>(): R;
    flipped<R = boolean>(): R;
    setFlipped<R = void, P0 = boolean>(_v: P0): R;
    imageAlignment<R = number>(): R;
    setImageAlignment<R = void, P0 = number>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    frameStyle<R = number>(): R;
    setFrameStyle<R = void, P0 = number>(_v: P0): R;
    tintColor<R = cocoa.NSColor>(): R;
    setTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    imageState<R = number>(): R;
    setImageState<R = void, P0 = number>(_v: P0): R;
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    appearance<R = cocoa.NSAppearance>(): R;
    setAppearance<R = void, P0 = cocoa.NSAppearance>(_v: P0): R;
    transform<R = cocoa.CGAffineTransform>(): R;
    setTransform<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    colorSpace<R = cocoa.NSColorSpace>(): R;
    setColorSpace<R = void, P0 = cocoa.NSColorSpace>(_v: P0): R;
    bounds<R = cocoa.CGRect>(): R;
    setBounds<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    asynchronousImage<R = cocoa.NSImage>(): R;
    setAsynchronousImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSImageViewAsynchronousPreparationInputParameters<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSAsynchronousPreparationInputParametersProtocol {
      alloc<R = _NSImageViewAsynchronousPreparationInputParameters>(): R;
      new: <R = _NSImageViewAsynchronousPreparationInputParameters>() => R;
    }
  }
}
