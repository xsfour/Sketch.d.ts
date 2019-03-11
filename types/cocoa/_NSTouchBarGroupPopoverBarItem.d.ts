/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarGroupPopoverBarItem<T = any> extends cocoa.NSPopoverTouchBarItem {
    cxx_destruct<R = void>(): R;
    isVisible<R = boolean>(): R;
    groupBarItem<R = cocoa.NSButtonGroupTouchBarItem>(): R;
    setGroupBarItem<R = void, P0 = cocoa.NSButtonGroupTouchBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarGroupPopoverBarItem<T = any> extends cocoa.classes.NSPopoverTouchBarItem {
      alloc<R = _NSTouchBarGroupPopoverBarItem>(): R;
      new: <R = _NSTouchBarGroupPopoverBarItem>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
    }
  }
}
