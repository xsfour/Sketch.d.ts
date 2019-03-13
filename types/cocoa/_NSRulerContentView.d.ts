/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRulerContentView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
    rulerView<R = NSRulerView>(): R;
    setRulerView<R = void, P0 = NSRulerView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSRulerContentView<T = any> extends NSView {
      alloc<R = _NSRulerContentView>(): R;
      new: <R = _NSRulerContentView>() => R;
    }
  }
}
