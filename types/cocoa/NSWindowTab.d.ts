/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTab<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
    tabBarItem<R = NSTabBarItem>(): R;
    attributedTitle<R = NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = NSAttributedString>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    accessoryView<R = NSView>(): R;
    setAccessoryView<R = void, P0 = NSView>(_v: P0): R;
    toolTip<R = NSString>(): R;
    setToolTip<R = void, P0 = NSString>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowTab<T = any> extends NSObject {
      alloc<R = NSWindowTab>(): R;
      new: <R = NSWindowTab>() => R;
    }
  }
}

declare const NSWindowTab: cocoa.classes.NSWindowTab;
