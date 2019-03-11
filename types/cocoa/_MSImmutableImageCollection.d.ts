/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableImageCollection<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    images<R = cocoa.NSDictionary>(): R;
    setImages<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableImageCollection<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableImageCollection>(): R;
      new: <R = _MSImmutableImageCollection>() => R;
    }
  }
}
