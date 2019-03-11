/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMorphingDragImageView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    setImage_animated<R = void, P0 = unknown, P1 = boolean>(_setImage: P0, _animated: P1): R;
    _createImageView<R = unknown>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSMorphingDragImageView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSMorphingDragImageView>(): R;
      new: <R = NSMorphingDragImageView>() => R;
    }
  }
}

declare const NSMorphingDragImageView: cocoa.classes.NSMorphingDragImageView;
