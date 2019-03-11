/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedStyle<T = any> extends cocoa.MSSharedObject {}
  namespace classes {
    export interface _MSSharedStyle<T = any> extends cocoa.classes.MSSharedObject {
      alloc<R = _MSSharedStyle>(): R;
      new: <R = _MSSharedStyle>() => R;
    }
  }
}
