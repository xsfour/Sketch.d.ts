/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedTextStyleContainer<T = any> extends cocoa.MSSharedStyleContainer {}
  namespace classes {
    export interface _MSSharedTextStyleContainer<T = any> extends cocoa.classes.MSSharedStyleContainer {
      alloc<R = _MSSharedTextStyleContainer>(): R;
      new: <R = _MSSharedTextStyleContainer>() => R;
    }
  }
}
