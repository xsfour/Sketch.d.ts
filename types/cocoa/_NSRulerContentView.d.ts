/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRulerContentView<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    rulerView<R = cocoa.NSRulerView>(): R;
    setRulerView<R = void, P0 = cocoa.NSRulerView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSRulerContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSRulerContentView>(): R;
      new: <R = _NSRulerContentView>() => R;
    }
  }
}
