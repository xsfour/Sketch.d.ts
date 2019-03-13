/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTitlebarDecorationView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    _titlebarDecorationCoreUIOptions<R = unknown>(): R;
    titlebarContainerView<R = NSTitlebarContainerView>(): R;
    setTitlebarContainerView<R = void, P0 = NSTitlebarContainerView>(_v: P0): R;
    drawsBottomSeparator<R = boolean>(): R;
    setDrawsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTitlebarDecorationView<T = any> extends NSView {
      alloc<R = _NSTitlebarDecorationView>(): R;
      new: <R = _NSTitlebarDecorationView>() => R;
    }
  }
}
