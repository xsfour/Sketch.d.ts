/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarItem<T = any> extends NSObject, NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    attributedTitle<R = NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = NSAttributedString>(_v: P0): R;
    pinned<R = boolean>(): R;
    setPinned<R = void, P0 = boolean>(_v: P0): R;
    themeColor<R = NSColor>(): R;
    setThemeColor<R = void, P0 = NSColor>(_v: P0): R;
    accessoryViews<R = NSArray>(): R;
    setAccessoryViews<R = void, P0 = NSArray>(_v: P0): R;
    alternateImage<R = NSImage>(): R;
    setAlternateImage<R = void, P0 = NSImage>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    toolTip<R = NSString>(): R;
    setToolTip<R = void, P0 = NSString>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTabBarItem<T = any> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSTabBarItem>(): R;
      new: <R = NSTabBarItem>() => R;
    }
  }
}

declare const NSTabBarItem: cocoa.classes.NSTabBarItem;
