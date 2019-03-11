/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextInputPopoverTouchBarItem<T = any> extends cocoa.NSPopoverTouchBarItem {
    dismissPopover_postESCKeyEvent<R = void, P0 = unknown, P1 = boolean>(_dismissPopover: P0, _postESCKeyEvent: P1): R;
    _allowsInvisiblePopover<R = boolean>(): R;
    postESCOnNextClose<R = boolean>(): R;
    setPostESCOnNextClose<R = void, P0 = boolean>(_v: P0): R;
    inputContext<R = cocoa.NSTextInputContext>(): R;
    setInputContext<R = void, P0 = cocoa.NSTextInputContext>(_v: P0): R;
    postsESCOnClose<R = boolean>(): R;
    setPostsESCOnClose<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface __NSTextInputPopoverTouchBarItem<T = any> extends cocoa.classes.NSPopoverTouchBarItem {
      alloc<R = __NSTextInputPopoverTouchBarItem>(): R;
      new: <R = __NSTextInputPopoverTouchBarItem>() => R;
    }
  }
}
