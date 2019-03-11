/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedTextStyleContainer<T = any> extends cocoa.MSImmutableSharedStyleContainer {}
  namespace classes {
    export interface _MSImmutableSharedTextStyleContainer<T = any> extends cocoa.classes.MSImmutableSharedStyleContainer {
      alloc<R = _MSImmutableSharedTextStyleContainer>(): R;
      new: <R = _MSImmutableSharedTextStyleContainer>() => R;
    }
  }
}
