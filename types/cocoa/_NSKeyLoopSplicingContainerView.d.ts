/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyLoopSplicingContainerView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    lastKeyView<R = cocoa.NSView>(): R;
    setLastKeyView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    firstKeyView<R = cocoa.NSView>(): R;
    setFirstKeyView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSKeyLoopSplicingContainerView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSKeyLoopSplicingContainerView>(): R;
      new: <R = _NSKeyLoopSplicingContainerView>() => R;
    }
  }
}
