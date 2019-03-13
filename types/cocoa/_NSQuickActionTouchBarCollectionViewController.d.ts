/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarCollectionViewController<T = any> extends NSViewController, _NSQuickActionTouchBarItemDelegateProtocol, NSCollectionViewDataSourceProtocol, NSCollectionViewDelegateFlowLayoutProtocol {
    cxx_destruct<R = void>(): R;
    updateOrderedDataSources<R = void, P0 = unknown>(_updateOrderedDataSources: P0): R;
    delegate<R = _NSQuickActionTouchBarCollectionViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = _NSQuickActionTouchBarCollectionViewControllerDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarCollectionViewController<T = any> extends NSViewController, _NSQuickActionTouchBarItemDelegateProtocol, NSCollectionViewDataSourceProtocol, NSCollectionViewDelegateFlowLayoutProtocol {
      alloc<R = _NSQuickActionTouchBarCollectionViewController>(): R;
      new: <R = _NSQuickActionTouchBarCollectionViewController>() => R;
    }
  }
}
