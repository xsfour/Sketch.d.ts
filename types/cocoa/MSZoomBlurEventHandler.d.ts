/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomBlurEventHandler<T = any> extends cocoa.MSPointsEventHandler {
    blurStyle<R = cocoa.MSStyleBlur>(): R;
    setBlurStyle<R = void, P0 = cocoa.MSStyleBlur>(_v: P0): R;
  }
  namespace classes {
    export interface MSZoomBlurEventHandler<T = any> extends cocoa.classes.MSPointsEventHandler {
      alloc<R = MSZoomBlurEventHandler>(): R;
      new: <R = MSZoomBlurEventHandler>() => R;
    }
  }
}

declare const MSZoomBlurEventHandler: cocoa.classes.MSZoomBlurEventHandler;
