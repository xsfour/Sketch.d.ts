/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewColorFillView<T = any> extends cocoa.NSView {
    wantsUpdateLayer<R = boolean>(): R;
    fillColor<R = cocoa.NSColor>(): R;
    setFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSCollectionViewColorFillView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSCollectionViewColorFillView>(): R;
      new: <R = _NSCollectionViewColorFillView>() => R;
    }
  }
}
