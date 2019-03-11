/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewItemPrivateData<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSSplitViewItemPrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSSplitViewItemPrivateData>(): R;
      new: <R = _NSSplitViewItemPrivateData>() => R;
    }
  }
}
