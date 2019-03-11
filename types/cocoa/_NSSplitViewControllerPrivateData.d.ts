/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewControllerPrivateData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    splitViewItems<R = cocoa.NSMutableArray>(): R;
    setSplitViewItems<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSplitViewControllerPrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSSplitViewControllerPrivateData>(): R;
      new: <R = _NSSplitViewControllerPrivateData>() => R;
    }
  }
}
