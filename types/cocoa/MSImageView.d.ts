/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageView<T = any> extends NSImageView {
    webpURLFromDragData<R = unknown, P0 = unknown>(_webpURLFromDragData: P0): R;
  }
  namespace classes {
    export interface MSImageView<T = any> extends NSImageView {
      alloc<R = MSImageView>(): R;
      new: <R = MSImageView>() => R;
    }
  }
}

declare const MSImageView: cocoa.classes.MSImageView;
