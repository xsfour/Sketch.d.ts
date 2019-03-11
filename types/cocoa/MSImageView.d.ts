/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageView<T = any> extends cocoa.NSImageView {
    webpURLFromDragData<R = unknown, P0 = unknown>(_webpURLFromDragData: P0): R;
  }
  namespace classes {
    export interface MSImageView<T = any> extends cocoa.classes.NSImageView {
      alloc<R = MSImageView>(): R;
      new: <R = MSImageView>() => R;
    }
  }
}

declare const MSImageView: cocoa.classes.MSImageView;
