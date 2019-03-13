/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleBorderOptions<T = any> extends MSImmutableStylePart {
    lineJoinStyle<R = number>(): R;
    setLineJoinStyle<R = void, P0 = number>(_v: P0): R;
    lineCapStyle<R = number>(): R;
    setLineCapStyle<R = void, P0 = number>(_v: P0): R;
    dashPattern<R = NSArray>(): R;
    setDashPattern<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyleBorderOptions<T = any> extends MSImmutableStylePart {
      alloc<R = _MSImmutableStyleBorderOptions>(): R;
      new: <R = _MSImmutableStyleBorderOptions>() => R;
    }
  }
}
