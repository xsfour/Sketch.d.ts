/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberImageItemView<T = any> extends cocoa.NSScrubberItemView {
    imageView<R = cocoa.NSImageView>(): R;
    imageAlignment<R = number>(): R;
    setImageAlignment<R = void, P0 = number>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberImageItemView<T = any> extends cocoa.classes.NSScrubberItemView {
      alloc<R = NSScrubberImageItemView>(): R;
      new: <R = NSScrubberImageItemView>() => R;
    }
  }
}

declare const NSScrubberImageItemView: cocoa.classes.NSScrubberImageItemView;
