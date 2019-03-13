/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewColorFillView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSCollectionViewColorFillView<T = any> extends NSView {
      alloc<R = _NSCollectionViewColorFillView>(): R;
      new: <R = _NSCollectionViewColorFillView>() => R;
    }
  }
}
