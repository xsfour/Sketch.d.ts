/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTabViewControllerPrivateData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    UIProvider<R = cocoa.NSTabViewControllerUIProvider>(): R;
    setUIProvider<R = void, P0 = cocoa.NSTabViewControllerUIProvider>(_v: P0): R;
    tabStyle<R = number>(): R;
    setTabStyle<R = void, P0 = number>(_v: P0): R;
    transitionOptions<R = number>(): R;
    setTransitionOptions<R = void, P0 = number>(_v: P0): R;
    selectedTabViewItemIndex<R = number>(): R;
    setSelectedTabViewItemIndex<R = void, P0 = number>(_v: P0): R;
    tabViewItems<R = cocoa.NSMutableArray>(): R;
    setTabViewItems<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTabViewControllerPrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTabViewControllerPrivateData>(): R;
      new: <R = _NSTabViewControllerPrivateData>() => R;
    }
  }
}
