/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockFrameView<T = any> extends cocoa.NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface NSDockFrameView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSDockFrameView>(): R;
      new: <R = NSDockFrameView>() => R;
    }
  }
}

declare const NSDockFrameView: cocoa.classes.NSDockFrameView;
