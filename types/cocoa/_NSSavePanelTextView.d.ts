/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelTextView<T = any> extends cocoa.NSTextView {}
  namespace classes {
    export interface _NSSavePanelTextView<T = any> extends cocoa.classes.NSTextView {
      alloc<R = _NSSavePanelTextView>(): R;
      new: <R = _NSSavePanelTextView>() => R;
    }
  }
}
