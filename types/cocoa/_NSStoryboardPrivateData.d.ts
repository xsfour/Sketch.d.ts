/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStoryboardPrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSStoryboardPrivateData<T = any> extends NSObject {
      alloc<R = _NSStoryboardPrivateData>(): R;
      new: <R = _NSStoryboardPrivateData>() => R;
    }
  }
}
