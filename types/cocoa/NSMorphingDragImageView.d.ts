/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMorphingDragImageView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    setImage_animated<R = void, P0 = unknown, P1 = boolean>(_setImage: P0, _animated: P1): R;
    _createImageView<R = unknown>(): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSMorphingDragImageView<T = any> extends NSView {
      alloc<R = NSMorphingDragImageView>(): R;
      new: <R = NSMorphingDragImageView>() => R;
    }
  }
}

declare const NSMorphingDragImageView: cocoa.classes.NSMorphingDragImageView;
