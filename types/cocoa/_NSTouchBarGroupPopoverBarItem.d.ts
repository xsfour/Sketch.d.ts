/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarGroupPopoverBarItem<T = any> extends NSPopoverTouchBarItem {
    cxx_destruct<R = void>(): R;
    isVisible<R = boolean>(): R;
    groupBarItem<R = NSButtonGroupTouchBarItem>(): R;
    setGroupBarItem<R = void, P0 = NSButtonGroupTouchBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarGroupPopoverBarItem<T = any> extends NSPopoverTouchBarItem {
      alloc<R = _NSTouchBarGroupPopoverBarItem>(): R;
      new: <R = _NSTouchBarGroupPopoverBarItem>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
    }
  }
}
