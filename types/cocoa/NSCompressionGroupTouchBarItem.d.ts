/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompressionGroupTouchBarItem<T = any> extends NSGroupTouchBarItem {
    prioritizedCompressibleUserInterfaceOptions<R = NSArray>(): R;
    setPrioritizedCompressibleUserInterfaceOptions<R = void, P0 = NSArray>(_v: P0): R;
    effectiveCompressibleUserInterfaceOptions<R = number>(): R;
  }
  namespace classes {
    export interface NSCompressionGroupTouchBarItem<T = any> extends NSGroupTouchBarItem {
      alloc<R = NSCompressionGroupTouchBarItem>(): R;
      new: <R = NSCompressionGroupTouchBarItem>() => R;
      compressionGroupItemWithIdentifier_allowedOptions<R = unknown, P0 = unknown, P1 = number>(_compressionGroupItemWithIdentifier: P0, _allowedOptions: P1): R;
      alertCompressionGroupItemWithIdentifier<R = unknown, P0 = unknown>(_alertCompressionGroupItemWithIdentifier: P0): R;
    }
  }
}

declare const NSCompressionGroupTouchBarItem: cocoa.classes.NSCompressionGroupTouchBarItem;
