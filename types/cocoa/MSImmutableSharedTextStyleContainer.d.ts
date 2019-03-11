/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedTextStyleContainer<T = any> extends cocoa._MSImmutableSharedTextStyleContainer {}
  namespace classes {
    export interface MSImmutableSharedTextStyleContainer<T = any> extends cocoa.classes._MSImmutableSharedTextStyleContainer {
      alloc<R = MSImmutableSharedTextStyleContainer>(): R;
      new: <R = MSImmutableSharedTextStyleContainer>() => R;
    }
  }
}

declare const MSImmutableSharedTextStyleContainer: cocoa.classes.MSImmutableSharedTextStyleContainer;
