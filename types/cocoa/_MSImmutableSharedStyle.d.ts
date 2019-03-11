/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedStyle<T = any> extends cocoa.MSImmutableSharedObject {}
  namespace classes {
    export interface _MSImmutableSharedStyle<T = any> extends cocoa.classes.MSImmutableSharedObject {
      alloc<R = _MSImmutableSharedStyle>(): R;
      new: <R = _MSImmutableSharedStyle>() => R;
    }
  }
}
