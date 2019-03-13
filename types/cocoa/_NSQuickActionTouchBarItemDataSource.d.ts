/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarItemDataSource<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    invokeWithoutClient<R = boolean>(): R;
    needsInvocationFromClient<R = boolean>(): R;
    updateEnabled<R = void, P0 = boolean>(_updateEnabled: P0): R;
    updateWithQuickAction<R = void, P0 = unknown>(_updateWithQuickAction: P0): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    initWithQuickActionIdentifier_backgroundLoadingQueue<R = unknown, P0 = unknown, P1 = unknown>(_initWithQuickActionIdentifier: P0, _backgroundLoadingQueue: P1): R;
    enabled<R = boolean>(): R;
    label<R = NSString>(): R;
    quickActionIdentifier<R = NSString>(): R;
    backgroundColor<R = NSColor>(): R;
    image<R = NSImage>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarItemDataSource<T = any> extends NSObject {
      alloc<R = _NSQuickActionTouchBarItemDataSource>(): R;
      new: <R = _NSQuickActionTouchBarItemDataSource>() => R;
      automaticallyNotifiesObserversOfBackgroundColor<R = boolean>(): R;
      automaticallyNotifiesObserversOfEnabled<R = boolean>(): R;
      automaticallyNotifiesObserversOfLabel<R = boolean>(): R;
      automaticallyNotifiesObserversOfImage<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
    }
  }
}
