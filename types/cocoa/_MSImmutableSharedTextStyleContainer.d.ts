/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedTextStyleContainer<T = any> extends MSImmutableSharedStyleContainer {}
  namespace classes {
    export interface _MSImmutableSharedTextStyleContainer<T = any> extends MSImmutableSharedStyleContainer {
      alloc<R = _MSImmutableSharedTextStyleContainer>(): R;
      new: <R = _MSImmutableSharedTextStyleContainer>() => R;
    }
  }
}
