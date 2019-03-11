/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextAnimationOverlayView<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    glyphRange<R = cocoa._NSRange>(): R;
    setGlyphRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    renderer<R = cocoa.CDUnknownBlockType>(): R;
    setRenderer<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTextAnimationOverlayView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTextAnimationOverlayView>(): R;
      new: <R = _NSTextAnimationOverlayView>() => R;
    }
  }
}
