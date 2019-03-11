/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleBorder<T = any> extends cocoa.MSImmutableStyleBasicFill {
    thickness<R = number>(): R;
    setThickness<R = void, P0 = number>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyleBorder<T = any> extends cocoa.classes.MSImmutableStyleBasicFill {
      alloc<R = _MSImmutableStyleBorder>(): R;
      new: <R = _MSImmutableStyleBorder>() => R;
    }
  }
}
