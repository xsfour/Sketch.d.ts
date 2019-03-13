/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedTextStyleContainer<T = any> extends MSSharedStyleContainer {}
  namespace classes {
    export interface _MSSharedTextStyleContainer<T = any> extends MSSharedStyleContainer {
      alloc<R = _MSSharedTextStyleContainer>(): R;
      new: <R = _MSSharedTextStyleContainer>() => R;
    }
  }
}
