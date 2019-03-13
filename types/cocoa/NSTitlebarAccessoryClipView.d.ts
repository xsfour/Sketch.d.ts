/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarAccessoryClipView<T = any> extends NSClipView {
    cxx_destruct<R = void>(): R;
    accessoryViewController<R = NSTitlebarAccessoryViewController>(): R;
    setAccessoryViewController<R = void, P0 = NSTitlebarAccessoryViewController>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarAccessoryClipView<T = any> extends NSClipView {
      alloc<R = NSTitlebarAccessoryClipView>(): R;
      new: <R = NSTitlebarAccessoryClipView>() => R;
    }
  }
}

declare const NSTitlebarAccessoryClipView: cocoa.classes.NSTitlebarAccessoryClipView;
