/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxSeparatorView<T = any> extends cocoa.NSView {
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSBoxSeparatorView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSBoxSeparatorView>(): R;
      new: <R = _NSBoxSeparatorView>() => R;
    }
  }
}
