/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSColor<T = any> extends cocoa.MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    setRed<R = void, P0 = number>(_setRed: P0): R;
    setGreen<R = void, P0 = number>(_setGreen: P0): R;
    setBlue<R = void, P0 = number>(_setBlue: P0): R;
    setAlpha<R = void, P0 = number>(_setAlpha: P0): R;
    red<R = number>(): R;
    green<R = number>(): R;
    blue<R = number>(): R;
    alpha<R = number>(): R;
  }
  namespace classes {
    export interface _MSColor<T = any> extends cocoa.classes.MSModelObject {
      alloc<R = _MSColor>(): R;
      new: <R = _MSColor>() => R;
    }
  }
}
