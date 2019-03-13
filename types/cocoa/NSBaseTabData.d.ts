/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBaseTabData<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dispose<R = void>(): R;
    tabBarItem<R = NSTabBarItem>(): R;
    setTabBarItem<R = void, P0 = NSTabBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface NSBaseTabData<T = any> extends NSObject {
      alloc<R = NSBaseTabData>(): R;
      new: <R = NSBaseTabData>() => R;
    }
  }
}

declare const NSBaseTabData: cocoa.classes.NSBaseTabData;
