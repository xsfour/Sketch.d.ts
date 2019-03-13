/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarClippedItemsIndicator<T = any> extends NSPopUpButton {
    didSendActionNotification<R = void, P0 = unknown>(_didSendActionNotification: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    itemIsClipped<R = boolean, P0 = unknown>(_itemIsClipped: P0): R;
    clippedItems<R = unknown>(): R;
    setClippedItems<R = void, P0 = unknown>(_setClippedItems: P0): R;
    _updateMenuForClippedItems<R = void>(): R;
    _willPopUpNotification<R = void, P0 = unknown>(__willPopUpNotification: P0): R;
    _computeMenuForClippedItemsIfNeeded<R = void>(): R;
    _simpleOverflowMenuItemClicked<R = void, P0 = unknown>(__simpleOverflowMenuItemClicked: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    _shouldDrawSelectionIndicatorForItem<R = boolean, P0 = unknown>(__shouldDrawSelectionIndicatorForItem: P0): R;
    _computeMenuForClippedItems<R = void>(): R;
    hasItemsToDisplayInPopUp<R = boolean>(): R;
    clipIndicatorImage<R = unknown>(): R;
  }
  namespace classes {
    export interface NSToolbarClippedItemsIndicator<T = any> extends NSPopUpButton {
      alloc<R = NSToolbarClippedItemsIndicator>(): R;
      new: <R = NSToolbarClippedItemsIndicator>() => R;
      willHaveItemsToDisplayForItemViewers<R = boolean, P0 = unknown>(_willHaveItemsToDisplayForItemViewers: P0): R;
      isItemShownInPopupIfSoleEntry<R = boolean, P0 = unknown>(_isItemShownInPopupIfSoleEntry: P0): R;
    }
  }
}

declare const NSToolbarClippedItemsIndicator: cocoa.classes.NSToolbarClippedItemsIndicator;
