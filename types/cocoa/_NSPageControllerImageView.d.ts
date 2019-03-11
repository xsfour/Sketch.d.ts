/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPageControllerImageView<T = any> extends cocoa.NSImageView {}
  namespace classes {
    export interface _NSPageControllerImageView<T = any> extends cocoa.classes.NSImageView {
      alloc<R = _NSPageControllerImageView>(): R;
      new: <R = _NSPageControllerImageView>() => R;
    }
  }
}
