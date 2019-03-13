/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudRoundedView<T = any> extends NSView {}
  namespace classes {
    export interface MSCloudRoundedView<T = any> extends NSView {
      alloc<R = MSCloudRoundedView>(): R;
      new: <R = MSCloudRoundedView>() => R;
    }
  }
}

declare const MSCloudRoundedView: cocoa.classes.MSCloudRoundedView;
