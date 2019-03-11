/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudRoundedView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface MSCloudRoundedView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSCloudRoundedView>(): R;
      new: <R = MSCloudRoundedView>() => R;
    }
  }
}

declare const MSCloudRoundedView: cocoa.classes.MSCloudRoundedView;
