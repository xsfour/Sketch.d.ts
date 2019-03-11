/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopoverDismisserView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface MSPopoverDismisserView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSPopoverDismisserView>(): R;
      new: <R = MSPopoverDismisserView>() => R;
    }
  }
}

declare const MSPopoverDismisserView: cocoa.classes.MSPopoverDismisserView;
