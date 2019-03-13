/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSGradientStop<T = any> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSGradientStop<T = any> extends MSModelObject {
      alloc<R = _MSGradientStop>(): R;
      new: <R = _MSGradientStop>() => R;
    }
  }
}
