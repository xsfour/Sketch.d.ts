/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewFloatingSubviewsContainerView<T = any> extends NSView {
    setCanDrawSubviewsIntoLayer<R = void, P0 = boolean>(_setCanDrawSubviewsIntoLayer: P0): R;
    _subViewCount<R = number>(): R;
  }
  namespace classes {
    export interface _NSScrollViewFloatingSubviewsContainerView<T = any> extends NSView {
      alloc<R = _NSScrollViewFloatingSubviewsContainerView>(): R;
      new: <R = _NSScrollViewFloatingSubviewsContainerView>() => R;
    }
  }
}
