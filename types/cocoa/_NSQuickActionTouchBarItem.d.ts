/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarItem<T = any> extends NSCollectionViewItem {
    buttonPressed<R = void, P0 = unknown>(_buttonPressed: P0): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    fittingSizeForCollectionView<R = CGSize, P0 = unknown>(_fittingSizeForCollectionView: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    delegate<R = _NSQuickActionTouchBarItemDelegate>(): R;
    setDelegate<R = void, P0 = _NSQuickActionTouchBarItemDelegate>(_v: P0): R;
    representedDataSource<R = _NSQuickActionTouchBarItemDataSource>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarItem<T = any> extends NSCollectionViewItem {
      alloc<R = _NSQuickActionTouchBarItem>(): R;
      new: <R = _NSQuickActionTouchBarItem>() => R;
      keyPathsForValuesAffectingRepresentedDataSource<R = unknown>(): R;
      automaticallyNotifiesObserversOfRepresentedDataSource<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
    }
  }
}
