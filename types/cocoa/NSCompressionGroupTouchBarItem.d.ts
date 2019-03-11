/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompressionGroupTouchBarItem<T = any> extends cocoa.NSGroupTouchBarItem {
    prioritizedCompressibleUserInterfaceOptions<R = cocoa.NSArray>(): R;
    setPrioritizedCompressibleUserInterfaceOptions<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    effectiveCompressibleUserInterfaceOptions<R = number>(): R;
  }
  namespace classes {
    export interface NSCompressionGroupTouchBarItem<T = any> extends cocoa.classes.NSGroupTouchBarItem {
      alloc<R = NSCompressionGroupTouchBarItem>(): R;
      new: <R = NSCompressionGroupTouchBarItem>() => R;
      compressionGroupItemWithIdentifier_allowedOptions<R = unknown, P0 = unknown, P1 = number>(_compressionGroupItemWithIdentifier: P0, _allowedOptions: P1): R;
      alertCompressionGroupItemWithIdentifier<R = unknown, P0 = unknown>(_alertCompressionGroupItemWithIdentifier: P0): R;
    }
  }
}

declare const NSCompressionGroupTouchBarItem: cocoa.classes.NSCompressionGroupTouchBarItem;
