/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedStyleContainer<T = any> extends MSImmutableSharedObjectContainer {}
  namespace classes {
    export interface _MSImmutableSharedStyleContainer<T = any> extends MSImmutableSharedObjectContainer {
      alloc<R = _MSImmutableSharedStyleContainer>(): R;
      new: <R = _MSImmutableSharedStyleContainer>() => R;
    }
  }
}
