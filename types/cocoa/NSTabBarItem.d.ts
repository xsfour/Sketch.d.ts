/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarItem<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    attributedTitle<R = cocoa.NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    pinned<R = boolean>(): R;
    setPinned<R = void, P0 = boolean>(_v: P0): R;
    themeColor<R = cocoa.NSColor>(): R;
    setThemeColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    accessoryViews<R = cocoa.NSArray>(): R;
    setAccessoryViews<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    alternateImage<R = cocoa.NSImage>(): R;
    setAlternateImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    toolTip<R = cocoa.NSString>(): R;
    setToolTip<R = void, P0 = cocoa.NSString>(_v: P0): R;
    label<R = cocoa.NSString>(): R;
    setLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTabBarItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSTabBarItem>(): R;
      new: <R = NSTabBarItem>() => R;
    }
  }
}

declare const NSTabBarItem: cocoa.classes.NSTabBarItem;
