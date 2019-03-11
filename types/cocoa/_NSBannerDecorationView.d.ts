/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBannerDecorationView<T = any> extends cocoa.NSView {
    wantsUpdateLayer<R = boolean>(): R;
    drawsBottomSeparator<R = boolean>(): R;
    setDrawsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
    drawsTopSeparator<R = boolean>(): R;
    setDrawsTopSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSBannerDecorationView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSBannerDecorationView>(): R;
      new: <R = _NSBannerDecorationView>() => R;
    }
  }
}
