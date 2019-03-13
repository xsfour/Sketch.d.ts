/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTabViewControllerPrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
    UIProvider<R = NSTabViewControllerUIProvider>(): R;
    setUIProvider<R = void, P0 = NSTabViewControllerUIProvider>(_v: P0): R;
    tabStyle<R = number>(): R;
    setTabStyle<R = void, P0 = number>(_v: P0): R;
    transitionOptions<R = number>(): R;
    setTransitionOptions<R = void, P0 = number>(_v: P0): R;
    selectedTabViewItemIndex<R = number>(): R;
    setSelectedTabViewItemIndex<R = void, P0 = number>(_v: P0): R;
    tabViewItems<R = NSMutableArray>(): R;
    setTabViewItems<R = void, P0 = NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTabViewControllerPrivateData<T = any> extends NSObject {
      alloc<R = _NSTabViewControllerPrivateData>(): R;
      new: <R = _NSTabViewControllerPrivateData>() => R;
    }
  }
}
