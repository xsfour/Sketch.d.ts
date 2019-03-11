/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionProvider<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    beginConfiguration<R = unknown>(): R;
    dealloc<R = void>(): R;
    cancel<R = void>(): R;
    configurationDidChange<R = void, P0 = unknown>(_configurationDidChange: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    initWithObserver_presentation<R = unknown, P0 = unknown, P1 = unknown>(_initWithObserver: P0, _presentation: P1): R;
    activeQuickActions<R = cocoa.NSSet>(): R;
    allQuickActions<R = cocoa.NSSet>(): R;
    activeOrderedQuickActions<R = cocoa.NSArray>(): R;
    allOrderedQuickActions<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface _NSQuickActionProvider<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSQuickActionProvider>(): R;
      new: <R = _NSQuickActionProvider>() => R;
      providerWithObserver_presentationMode<R = unknown, P0 = unknown, P1 = unknown>(_providerWithObserver: P0, _presentationMode: P1): R;
    }
  }
}
