/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbolContainer<T = any> extends cocoa.MSSharedObjectContainer {}
  namespace classes {
    export interface _MSSymbolContainer<T = any> extends cocoa.classes.MSSharedObjectContainer {
      alloc<R = _MSSymbolContainer>(): R;
      new: <R = _MSSymbolContainer>() => R;
    }
  }
}
