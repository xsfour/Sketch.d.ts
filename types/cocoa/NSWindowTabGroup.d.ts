/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTabGroup<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    plusTab<R = unknown>(): R;
    removeWindow<R = void, P0 = unknown>(_removeWindow: P0): R;
    insertWindow_atIndex<R = void, P0 = unknown, P1 = number>(_insertWindow: P0, _atIndex: P1): R;
    addWindow<R = void, P0 = unknown>(_addWindow: P0): R;
    initWithTabbingIdentifier<R = unknown, P0 = unknown>(_initWithTabbingIdentifier: P0): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    tabBarEnabled<R = boolean>(): R;
    setTabBarEnabled<R = void, P0 = boolean>(_v: P0): R;
    overviewVisible<R = boolean>(): R;
    setOverviewVisible<R = void, P0 = boolean>(_v: P0): R;
    selectedWindow<R = cocoa.NSWindow>(): R;
    setSelectedWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    tabBarVisible<R = boolean>(): R;
    windows<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSWindowTabGroup<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSWindowTabGroup>(): R;
      new: <R = NSWindowTabGroup>() => R;
    }
  }
}

declare const NSWindowTabGroup: cocoa.classes.NSWindowTabGroup;
