/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBaseTabData<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dispose<R = void>(): R;
    tabBarItem<R = cocoa.NSTabBarItem>(): R;
    setTabBarItem<R = void, P0 = cocoa.NSTabBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface NSBaseTabData<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSBaseTabData>(): R;
      new: <R = NSBaseTabData>() => R;
    }
  }
}

declare const NSBaseTabData: cocoa.classes.NSBaseTabData;
