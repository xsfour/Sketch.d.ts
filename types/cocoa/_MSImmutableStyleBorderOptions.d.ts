/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleBorderOptions<T = any> extends cocoa.MSImmutableStylePart {
    lineJoinStyle<R = number>(): R;
    setLineJoinStyle<R = void, P0 = number>(_v: P0): R;
    lineCapStyle<R = number>(): R;
    setLineCapStyle<R = void, P0 = number>(_v: P0): R;
    dashPattern<R = cocoa.NSArray>(): R;
    setDashPattern<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyleBorderOptions<T = any> extends cocoa.classes.MSImmutableStylePart {
      alloc<R = _MSImmutableStyleBorderOptions>(): R;
      new: <R = _MSImmutableStyleBorderOptions>() => R;
    }
  }
}
