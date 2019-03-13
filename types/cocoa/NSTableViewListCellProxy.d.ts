/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewListCellProxy<T = any> extends NSTableViewCellProxy {
    accessibilitySetSelectedAttribute<R = void, P0 = unknown>(_accessibilitySetSelectedAttribute: P0): R;
    accessibilityIsSelectedAttributeSettable<R = boolean>(): R;
    accessibilitySelectedAttribute<R = unknown>(): R;
    _canDeselect<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTableViewListCellProxy<T = any> extends NSTableViewCellProxy {
      alloc<R = NSTableViewListCellProxy>(): R;
      new: <R = NSTableViewListCellProxy>() => R;
    }
  }
}

declare const NSTableViewListCellProxy: cocoa.classes.NSTableViewListCellProxy;
