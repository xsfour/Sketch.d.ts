/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPageControllerView<T = any> extends NSView {}
  namespace classes {
    export interface _NSPageControllerView<T = any> extends NSView {
      alloc<R = _NSPageControllerView>(): R;
      new: <R = _NSPageControllerView>() => R;
    }
  }
}
