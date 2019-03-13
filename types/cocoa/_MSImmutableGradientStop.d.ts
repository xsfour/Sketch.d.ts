/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableGradientStop<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    color<R = MSImmutableColor>(): R;
    setColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableGradientStop<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableGradientStop>(): R;
      new: <R = _MSImmutableGradientStop>() => R;
    }
  }
}
