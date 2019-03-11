/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewAsynchronousPreparationResult<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    imageSize<R = cocoa.CGSize>(): R;
    setImageSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    alignmentRectSize<R = cocoa.CGSize>(): R;
    setAlignmentRectSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    contentsScaling<R = cocoa.NSString>(): R;
    setContentsScaling<R = void, P0 = cocoa.NSString>(_v: P0): R;
    contentsCenter<R = cocoa.CGRect>(): R;
    setContentsCenter<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    CGImage<R = cocoa.CGImage>(): R;
    setCGImage<R = void, P0 = cocoa.CGImage>(_v: P0): R;
  }
  namespace classes {
    export interface _NSImageViewAsynchronousPreparationResult<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSImageViewAsynchronousPreparationResult>(): R;
      new: <R = _NSImageViewAsynchronousPreparationResult>() => R;
    }
  }
}
