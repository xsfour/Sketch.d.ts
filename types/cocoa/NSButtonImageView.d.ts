/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonImageView<T = any> extends cocoa._NSSimpleImageView {
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    tintColor<R = cocoa.NSColor>(): R;
    setTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSButtonImageView<T = any> extends cocoa.classes._NSSimpleImageView {
      alloc<R = NSButtonImageView>(): R;
      new: <R = NSButtonImageView>() => R;
    }
  }
}

declare const NSButtonImageView: cocoa.classes.NSButtonImageView;
