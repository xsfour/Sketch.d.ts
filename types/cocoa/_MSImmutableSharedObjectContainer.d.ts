/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedObjectContainer<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    objects<R = cocoa.NSArray>(): R;
    setObjects<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSharedObjectContainer<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableSharedObjectContainer>(): R;
      new: <R = _MSImmutableSharedObjectContainer>() => R;
    }
  }
}
