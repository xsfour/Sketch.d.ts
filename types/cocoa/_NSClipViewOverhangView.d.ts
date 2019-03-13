/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClipViewOverhangView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSClipViewOverhangView<T = any> extends NSView {
      alloc<R = _NSClipViewOverhangView>(): R;
      new: <R = _NSClipViewOverhangView>() => R;
    }
  }
}
