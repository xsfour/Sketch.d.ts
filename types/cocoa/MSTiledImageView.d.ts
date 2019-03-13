/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiledImageView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSTiledImageView<T = any> extends NSView {
      alloc<R = MSTiledImageView>(): R;
      new: <R = MSTiledImageView>() => R;
    }
  }
}

declare const MSTiledImageView: cocoa.classes.MSTiledImageView;
