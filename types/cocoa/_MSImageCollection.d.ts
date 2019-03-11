/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImageCollection<T = any> extends cocoa.MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    images<R = cocoa.NSDictionary>(): R;
    setImages<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImageCollection<T = any> extends cocoa.classes.MSModelObject {
      alloc<R = _MSImageCollection>(): R;
      new: <R = _MSImageCollection>() => R;
    }
  }
}
