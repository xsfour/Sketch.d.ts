/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleShadow<T = any> extends cocoa.MSImmutableStylePart {
    contextSettings<R = cocoa.MSImmutableGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = cocoa.MSImmutableGraphicsContextSettings>(_v: P0): R;
    color<R = cocoa.MSImmutableColor>(): R;
    setColor<R = void, P0 = cocoa.MSImmutableColor>(_v: P0): R;
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
    export interface _MSImmutableStyleShadow<T = any> extends cocoa.classes.MSImmutableStylePart {
      alloc<R = _MSImmutableStyleShadow>(): R;
      new: <R = _MSImmutableStyleShadow>() => R;
    }
  }
}
