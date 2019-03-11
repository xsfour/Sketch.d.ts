/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewRubberband<T = any> extends cocoa.NSView {
    _preferredAppearance<R = unknown>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    initWithFrameColor_fillColor<R = unknown, P0 = unknown, P1 = unknown>(_initWithFrameColor: P0, _fillColor: P1): R;
  }
  namespace classes {
    export interface _NSCollectionViewRubberband<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSCollectionViewRubberband>(): R;
      new: <R = _NSCollectionViewRubberband>() => R;
    }
  }
}
