/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyLoopSplicingContainerView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    lastKeyView<R = NSView>(): R;
    setLastKeyView<R = void, P0 = NSView>(_v: P0): R;
    firstKeyView<R = NSView>(): R;
    setFirstKeyView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSKeyLoopSplicingContainerView<T = any> extends NSView {
      alloc<R = _NSKeyLoopSplicingContainerView>(): R;
      new: <R = _NSKeyLoopSplicingContainerView>() => R;
    }
  }
}
