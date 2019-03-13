/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleBasicFill<T = any> extends MSImmutableStylePart {
    gradient<R = MSImmutableGradient>(): R;
    setGradient<R = void, P0 = MSImmutableGradient>(_v: P0): R;
    contextSettings<R = MSImmutableGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = MSImmutableGraphicsContextSettings>(_v: P0): R;
    color<R = MSImmutableColor>(): R;
    setColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    fillType<R = number>(): R;
    setFillType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyleBasicFill<T = any> extends MSImmutableStylePart {
      alloc<R = _MSImmutableStyleBasicFill>(): R;
      new: <R = _MSImmutableStyleBasicFill>() => R;
    }
  }
}
