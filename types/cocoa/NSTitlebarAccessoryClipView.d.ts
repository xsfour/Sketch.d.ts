/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarAccessoryClipView<T = any> extends cocoa.NSClipView {
    cxx_destruct<R = void>(): R;
    accessoryViewController<R = cocoa.NSTitlebarAccessoryViewController>(): R;
    setAccessoryViewController<R = void, P0 = cocoa.NSTitlebarAccessoryViewController>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarAccessoryClipView<T = any> extends cocoa.classes.NSClipView {
      alloc<R = NSTitlebarAccessoryClipView>(): R;
      new: <R = NSTitlebarAccessoryClipView>() => R;
    }
  }
}

declare const NSTitlebarAccessoryClipView: cocoa.classes.NSTitlebarAccessoryClipView;
