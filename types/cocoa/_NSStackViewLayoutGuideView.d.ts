/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStackViewLayoutGuideView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface _NSStackViewLayoutGuideView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSStackViewLayoutGuideView>(): R;
      new: <R = _NSStackViewLayoutGuideView>() => R;
    }
  }
}
