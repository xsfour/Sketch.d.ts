/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabPickerViewController<T = any> extends NSViewController, NSVisualTabPickerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    selectItemAtIndex<R = void, P0 = number>(_selectItemAtIndex: P0): R;
    entryOrExitAnimationInProgress<R = boolean>(): R;
    willStartExitAnimationForVisualTabPickerController<R = void, P0 = unknown>(_willStartExitAnimationForVisualTabPickerController: P0): R;
    tabPickerItemsDidChange<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    snapshotForWindow<R = unknown, P0 = unknown>(_snapshotForWindow: P0): R;
    hasSnapshotForWindow<R = boolean, P0 = unknown>(_hasSnapshotForWindow: P0): R;
    _updateSnapshotForWindow<R = unknown, P0 = unknown>(__updateSnapshotForWindow: P0): R;
    _makeTabPickerSnapshotForWindow<R = unknown, P0 = unknown>(__makeTabPickerSnapshotForWindow: P0): R;
    hideTabPickerAnimated<R = void, P0 = boolean>(_hideTabPickerAnimated: P0): R;
    showTabPickerAnimated_includeNewButton<R = void, P0 = boolean, P1 = boolean>(_showTabPickerAnimated: P0, _includeNewButton: P1): R;
    _makeTabPickerViewControllerWithTabBarSnapshot_includeNewButton<R = void, P0 = unknown, P1 = boolean>(__makeTabPickerViewControllerWithTabBarSnapshot: P0, _includeNewButton: P1): R;
    handleMagnification<R = void, P0 = unknown>(_handleMagnification: P0): R;
    windowSnapshots<R = NSMapTable>(): R;
    selectedItem<R = NSTabBarItem>(): R;
    setSelectedItem<R = void, P0 = NSTabBarItem>(_v: P0): R;
    delegate<R = NSTabPickerDelegate>(): R;
    setDelegate<R = void, P0 = NSTabPickerDelegate>(_v: P0): R;
    isShown<R = boolean>(): R;
    setIsShown<R = void, P0 = boolean>(_v: P0): R;
    tabPickerController<R = NSVisualTabPickerRootViewController>(): R;
    setTabPickerController<R = void, P0 = NSVisualTabPickerRootViewController>(_v: P0): R;
    isClosing<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabPickerViewController<T = any> extends NSViewController, NSVisualTabPickerDelegateProtocol {
      alloc<R = NSTabPickerViewController>(): R;
      new: <R = NSTabPickerViewController>() => R;
    }
  }
}

declare const NSTabPickerViewController: cocoa.classes.NSTabPickerViewController;
