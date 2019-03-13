/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbolContainer<T = any> extends MSSharedObjectContainer {}
  namespace classes {
    export interface _MSSymbolContainer<T = any> extends MSSharedObjectContainer {
      alloc<R = _MSSymbolContainer>(): R;
      new: <R = _MSSymbolContainer>() => R;
    }
  }
}
