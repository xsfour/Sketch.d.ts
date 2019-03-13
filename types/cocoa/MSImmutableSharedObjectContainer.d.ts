/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedObjectContainer<T = any> extends _MSImmutableSharedObjectContainer {}
  namespace classes {
    export interface MSImmutableSharedObjectContainer<T = any> extends _MSImmutableSharedObjectContainer {
      alloc<R = MSImmutableSharedObjectContainer>(): R;
      new: <R = MSImmutableSharedObjectContainer>() => R;
    }
  }
}

declare const MSImmutableSharedObjectContainer: cocoa.classes.MSImmutableSharedObjectContainer;
