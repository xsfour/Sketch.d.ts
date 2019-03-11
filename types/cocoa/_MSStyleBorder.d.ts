/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleBorder<T = any> extends cocoa.MSStyleBasicFill {
    thickness<R = number>(): R;
    setThickness<R = void, P0 = number>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSStyleBorder<T = any> extends cocoa.classes.MSStyleBasicFill {
      alloc<R = _MSStyleBorder>(): R;
      new: <R = _MSStyleBorder>() => R;
    }
  }
}
