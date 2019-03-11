/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedStyleContainer<T = any> extends cocoa.MSSharedObjectContainer {}
  namespace classes {
    export interface _MSSharedStyleContainer<T = any> extends cocoa.classes.MSSharedObjectContainer {
      alloc<R = _MSSharedStyleContainer>(): R;
      new: <R = _MSSharedStyleContainer>() => R;
    }
  }
}
