/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTitlebarDecorationView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    _titlebarDecorationCoreUIOptions<R = unknown>(): R;
    titlebarContainerView<R = cocoa.NSTitlebarContainerView>(): R;
    setTitlebarContainerView<R = void, P0 = cocoa.NSTitlebarContainerView>(_v: P0): R;
    drawsBottomSeparator<R = boolean>(): R;
    setDrawsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTitlebarDecorationView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTitlebarDecorationView>(): R;
      new: <R = _NSTitlebarDecorationView>() => R;
    }
  }
}
