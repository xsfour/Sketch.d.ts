/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelTextView<T = any> extends NSTextView {}
  namespace classes {
    export interface _NSSavePanelTextView<T = any> extends NSTextView {
      alloc<R = _NSSavePanelTextView>(): R;
      new: <R = _NSSavePanelTextView>() => R;
    }
  }
}
