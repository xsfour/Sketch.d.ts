/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarCollectionViewController<T = any> extends cocoa.NSViewController, cocoa._NSQuickActionTouchBarItemDelegateProtocol, cocoa.NSCollectionViewDataSourceProtocol, cocoa.NSCollectionViewDelegateFlowLayoutProtocol {
    cxx_destruct<R = void>(): R;
    updateOrderedDataSources<R = void, P0 = unknown>(_updateOrderedDataSources: P0): R;
    delegate<R = cocoa._NSQuickActionTouchBarCollectionViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa._NSQuickActionTouchBarCollectionViewControllerDelegate>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarCollectionViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes._NSQuickActionTouchBarItemDelegateProtocol, cocoa.classes.NSCollectionViewDataSourceProtocol, cocoa.classes.NSCollectionViewDelegateFlowLayoutProtocol {
      alloc<R = _NSQuickActionTouchBarCollectionViewController>(): R;
      new: <R = _NSQuickActionTouchBarCollectionViewController>() => R;
    }
  }
}
