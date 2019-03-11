/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleShadow<T = any> extends cocoa.MSStylePart {
    contextSettings<R = cocoa.MSGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = cocoa.MSGraphicsContextSettings>(_v: P0): R;
    color<R = cocoa.MSColor>(): R;
    setColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
    spread<R = number>(): R;
    setSpread<R = void, P0 = number>(_v: P0): R;
    offsetY<R = number>(): R;
    setOffsetY<R = void, P0 = number>(_v: P0): R;
    offsetX<R = number>(): R;
    setOffsetX<R = void, P0 = number>(_v: P0): R;
    blurRadius<R = number>(): R;
    setBlurRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSStyleShadow<T = any> extends cocoa.classes.MSStylePart {
      alloc<R = _MSStyleShadow>(): R;
      new: <R = _MSStyleShadow>() => R;
    }
  }
}
