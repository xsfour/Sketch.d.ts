/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableGraphicsContextSettings<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    opacity<R = number>(): R;
    setOpacity<R = void, P0 = number>(_v: P0): R;
    blendMode<R = number>(): R;
    setBlendMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableGraphicsContextSettings<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableGraphicsContextSettings>(): R;
      new: <R = _MSImmutableGraphicsContextSettings>() => R;
    }
  }
}
