/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarNoItemsViewController<T = any> extends NSViewController {
    openExtensionsPreferences<R = void, P0 = unknown>(_openExtensionsPreferences: P0): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarNoItemsViewController<T = any> extends NSViewController {
      alloc<R = _NSQuickActionTouchBarNoItemsViewController>(): R;
      new: <R = _NSQuickActionTouchBarNoItemsViewController>() => R;
    }
  }
}
