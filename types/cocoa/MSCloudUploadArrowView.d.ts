/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUploadArrowView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    startAnimation<R = void>(): R;
    arrowLayer<R = cocoa.CALayer>(): R;
    setArrowLayer<R = void, P0 = cocoa.CALayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudUploadArrowView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSCloudUploadArrowView>(): R;
      new: <R = MSCloudUploadArrowView>() => R;
    }
  }
}

declare const MSCloudUploadArrowView: cocoa.classes.MSCloudUploadArrowView;
