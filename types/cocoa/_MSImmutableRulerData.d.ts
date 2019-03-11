/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableRulerData<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    guides<R = cocoa.NSArray>(): R;
    setGuides<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    base<R = number>(): R;
    setBase<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableRulerData<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableRulerData>(): R;
      new: <R = _MSImmutableRulerData>() => R;
    }
  }
}
