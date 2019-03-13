/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopUpIndicatorView<T = any> extends _NSSimpleImageView {
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSPopUpIndicatorView<T = any> extends _NSSimpleImageView {
      alloc<R = NSPopUpIndicatorView>(): R;
      new: <R = NSPopUpIndicatorView>() => R;
    }
  }
}

declare const NSPopUpIndicatorView: cocoa.classes.NSPopUpIndicatorView;
