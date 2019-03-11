/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTab<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    window<R = cocoa.NSWindow>(): R;
    setWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    tabBarItem<R = cocoa.NSTabBarItem>(): R;
    attributedTitle<R = cocoa.NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    accessoryView<R = cocoa.NSView>(): R;
    setAccessoryView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    toolTip<R = cocoa.NSString>(): R;
    setToolTip<R = void, P0 = cocoa.NSString>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowTab<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSWindowTab>(): R;
      new: <R = NSWindowTab>() => R;
    }
  }
}

declare const NSWindowTab: cocoa.classes.NSWindowTab;
