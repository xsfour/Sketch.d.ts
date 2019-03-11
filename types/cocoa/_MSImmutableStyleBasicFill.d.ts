/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleBasicFill<T = any> extends cocoa.MSImmutableStylePart {
    gradient<R = cocoa.MSImmutableGradient>(): R;
    setGradient<R = void, P0 = cocoa.MSImmutableGradient>(_v: P0): R;
    contextSettings<R = cocoa.MSImmutableGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = cocoa.MSImmutableGraphicsContextSettings>(_v: P0): R;
    color<R = cocoa.MSImmutableColor>(): R;
    setColor<R = void, P0 = cocoa.MSImmutableColor>(_v: P0): R;
    fillType<R = number>(): R;
    setFillType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyleBasicFill<T = any> extends cocoa.classes.MSImmutableStylePart {
      alloc<R = _MSImmutableStyleBasicFill>(): R;
      new: <R = _MSImmutableStyleBasicFill>() => R;
    }
  }
}
