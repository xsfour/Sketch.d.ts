/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewControllerPrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
    splitViewItems<R = NSMutableArray>(): R;
    setSplitViewItems<R = void, P0 = NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSplitViewControllerPrivateData<T = any> extends NSObject {
      alloc<R = _NSSplitViewControllerPrivateData>(): R;
      new: <R = _NSSplitViewControllerPrivateData>() => R;
    }
  }
}
