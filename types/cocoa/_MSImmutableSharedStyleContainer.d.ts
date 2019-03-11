/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedStyleContainer<T = any> extends cocoa.MSImmutableSharedObjectContainer {}
  namespace classes {
    export interface _MSImmutableSharedStyleContainer<T = any> extends cocoa.classes.MSImmutableSharedObjectContainer {
      alloc<R = _MSImmutableSharedStyleContainer>(): R;
      new: <R = _MSImmutableSharedStyleContainer>() => R;
    }
  }
}
