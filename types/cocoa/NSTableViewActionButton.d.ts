/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewActionButton<T = any> extends cocoa.NSControl, cocoa.NSAccessibilityButtonProtocol {
    isFlipped<R = boolean>(): R;
    layoutStateForBounds<R = unknown, P0 = cocoa.CGRect>(_layoutStateForBounds: P0): R;
    wantsLayer<R = boolean>(): R;
    requiredSize<R = cocoa.CGSize>(): R;
    setRequiredSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    rowAction<R = cocoa.NSTableViewRowAction>(): R;
    setRowAction<R = void, P0 = cocoa.NSTableViewRowAction>(_v: P0): R;
    alignment<R = number>(): R;
    setAlignment<R = void, P0 = number>(_v: P0): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTableViewActionButton<T = any> extends cocoa.classes.NSControl, cocoa.classes.NSAccessibilityButtonProtocol {
      alloc<R = NSTableViewActionButton>(): R;
      new: <R = NSTableViewActionButton>() => R;
    }
  }
}

declare const NSTableViewActionButton: cocoa.classes.NSTableViewActionButton;
