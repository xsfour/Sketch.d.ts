/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObjectAnimator_NSSplitViewItem<T = any> extends cocoa._NSObjectAnimator {
    _uncollapsePreferringOverlay<R = void>(): R;
    setCollapsed<R = void, P0 = boolean>(_setCollapsed: P0): R;
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
  }
  namespace classes {
    export interface _NSObjectAnimator_NSSplitViewItem<T = any> extends cocoa.classes._NSObjectAnimator {  }
  }
}
