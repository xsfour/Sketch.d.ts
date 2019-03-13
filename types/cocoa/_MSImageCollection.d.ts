/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImageCollection<T = any> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    images<R = NSDictionary>(): R;
    setImages<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImageCollection<T = any> extends MSModelObject {
      alloc<R = _MSImageCollection>(): R;
      new: <R = _MSImageCollection>() => R;
    }
  }
}
