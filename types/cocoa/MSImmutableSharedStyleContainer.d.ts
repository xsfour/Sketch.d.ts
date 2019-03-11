/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedStyleContainer<T = any> extends cocoa._MSImmutableSharedStyleContainer {}
  namespace classes {
    export interface MSImmutableSharedStyleContainer<T = any> extends cocoa.classes._MSImmutableSharedStyleContainer {
      alloc<R = MSImmutableSharedStyleContainer>(): R;
      new: <R = MSImmutableSharedStyleContainer>() => R;
    }
  }
}

declare const MSImmutableSharedStyleContainer: cocoa.classes.MSImmutableSharedStyleContainer;
