/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPrintThumbnailBaseView<T = any> extends NSView {
    _setNextKeyView<R = void, P0 = unknown>(__setNextKeyView: P0): R;
    _initialKeyView<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPrintThumbnailBaseView<T = any> extends NSView {
      alloc<R = _NSPrintThumbnailBaseView>(): R;
      new: <R = _NSPrintThumbnailBaseView>() => R;
    }
  }
}
