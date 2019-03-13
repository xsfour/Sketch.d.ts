/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableImageCollection<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    images<R = NSDictionary>(): R;
    setImages<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableImageCollection<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableImageCollection>(): R;
      new: <R = _MSImmutableImageCollection>() => R;
    }
  }
}
