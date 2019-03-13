/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewControllerSegmentedControlUIProvider<T = any> extends NSObject, NSTabViewControllerUIProviderProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _stopObservingTabViewItem<R = void, P0 = unknown>(__stopObservingTabViewItem: P0): R;
    _startObservingTabViewItem<R = void, P0 = unknown>(__startObservingTabViewItem: P0): R;
    _stopObservingTabViewItems<R = void, P0 = unknown>(__stopObservingTabViewItems: P0): R;
    _startObservingTabViewItems<R = void, P0 = unknown>(__startObservingTabViewItems: P0): R;
    _changeSelectedSegment<R = void, P0 = unknown>(__changeSelectedSegment: P0): R;
    _makeSegmentedControl<R = unknown>(): R;
    _addConstraintsForTabView_inContainer<R = void, P0 = unknown, P1 = unknown>(__addConstraintsForTabView: P0, _inContainer: P1): R;
    dealloc<R = void>(): R;
    segmentedControlLocation<R = number>(): R;
    setSegmentedControlLocation<R = void, P0 = number>(_v: P0): R;
    tabViewController<R = NSTabViewController>(): R;
    setTabViewController<R = void, P0 = NSTabViewController>(_v: P0): R;
    segmentedControl<R = NSSegmentedControl>(): R;
    setSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabViewControllerSegmentedControlUIProvider<T = any> extends NSObject, NSTabViewControllerUIProviderProtocol {
      alloc<R = NSTabViewControllerSegmentedControlUIProvider>(): R;
      new: <R = NSTabViewControllerSegmentedControlUIProvider>() => R;
    }
  }
}

declare const NSTabViewControllerSegmentedControlUIProvider: cocoa.classes.NSTabViewControllerSegmentedControlUIProvider;
