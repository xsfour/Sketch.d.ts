/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomBlurEventHandler<T = any> extends MSPointsEventHandler {
    blurStyle<R = MSStyleBlur>(): R;
    setBlurStyle<R = void, P0 = MSStyleBlur>(_v: P0): R;
  }
  namespace classes {
    export interface MSZoomBlurEventHandler<T = any> extends MSPointsEventHandler {
      alloc<R = MSZoomBlurEventHandler>(): R;
      new: <R = MSZoomBlurEventHandler>() => R;
    }
  }
}

declare const MSZoomBlurEventHandler: cocoa.classes.MSZoomBlurEventHandler;
