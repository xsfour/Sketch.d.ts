/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStackViewScrollView<T = any> extends NSScrollView {
    cxx_destruct<R = void>(): R;
    setScrollerStyle<R = void, P0 = number>(_setScrollerStyle: P0): R;
    enclosedStackView<R = unknown>(): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    delegate<R = MSStackViewScrollViewDelegate>(): R;
    setDelegate<R = void, P0 = MSStackViewScrollViewDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSStackViewScrollView<T = any> extends NSScrollView {
      alloc<R = MSStackViewScrollView>(): R;
      new: <R = MSStackViewScrollView>() => R;
    }
  }
}

declare const MSStackViewScrollView: cocoa.classes.MSStackViewScrollView;
