/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackableOutlineView<T = any> extends NSOutlineView {
    _wantsUserCancelledOperation<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTrackableOutlineView<T = any> extends NSOutlineView {
      alloc<R = NSTrackableOutlineView>(): R;
      new: <R = NSTrackableOutlineView>() => R;
    }
  }
}

declare const NSTrackableOutlineView: cocoa.classes.NSTrackableOutlineView;
