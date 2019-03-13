/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedStyle<T = any> extends MSSharedObject {}
  namespace classes {
    export interface _MSSharedStyle<T = any> extends MSSharedObject {
      alloc<R = _MSSharedStyle>(): R;
      new: <R = _MSSharedStyle>() => R;
    }
  }
}
