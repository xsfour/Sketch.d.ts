/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedObjectContainer<T = any> extends cocoa._MSImmutableSharedObjectContainer {}
  namespace classes {
    export interface MSImmutableSharedObjectContainer<T = any> extends cocoa.classes._MSImmutableSharedObjectContainer {
      alloc<R = MSImmutableSharedObjectContainer>(): R;
      new: <R = MSImmutableSharedObjectContainer>() => R;
    }
  }
}

declare const MSImmutableSharedObjectContainer: cocoa.classes.MSImmutableSharedObjectContainer;
