/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableBaseGrid<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    setIsEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableBaseGrid<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableBaseGrid>(): R;
      new: <R = _MSImmutableBaseGrid>() => R;
    }
  }
}
