/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverTransitionView<T = any> extends cocoa.NSView {
    initWithOldContent_newContent<R = unknown, P0 = unknown, P1 = unknown>(_initWithOldContent: P0, _newContent: P1): R;
  }
  namespace classes {
    export interface _NSPopoverTransitionView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSPopoverTransitionView>(): R;
      new: <R = _NSPopoverTransitionView>() => R;
    }
  }
}
