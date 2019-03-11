/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableColor<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    red<R = number>(): R;
    setRed<R = void, P0 = number>(_v: P0): R;
    green<R = number>(): R;
    setGreen<R = void, P0 = number>(_v: P0): R;
    blue<R = number>(): R;
    setBlue<R = void, P0 = number>(_v: P0): R;
    alpha<R = number>(): R;
    setAlpha<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableColor<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableColor>(): R;
      new: <R = _MSImmutableColor>() => R;
    }
  }
}
