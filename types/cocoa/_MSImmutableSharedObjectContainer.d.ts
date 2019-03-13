/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedObjectContainer<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    objects<R = NSArray>(): R;
    setObjects<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSharedObjectContainer<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableSharedObjectContainer>(): R;
      new: <R = _MSImmutableSharedObjectContainer>() => R;
    }
  }
}
