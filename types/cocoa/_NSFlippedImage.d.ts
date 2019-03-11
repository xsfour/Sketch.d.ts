/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFlippedImage<T = any> extends cocoa.NSImage {
    initWithRect_color_ofView<R = unknown, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown>(_initWithRect: P0, _color: P1, _ofView: P2): R;
  }
  namespace classes {
    export interface _NSFlippedImage<T = any> extends cocoa.classes.NSImage {
      alloc<R = _NSFlippedImage>(): R;
      new: <R = _NSFlippedImage>() => R;
    }
  }
}
