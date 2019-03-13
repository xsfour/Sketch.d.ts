/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarRangeBackdropView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    _coreUIDrawOptions<R = unknown>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    _commonViewSetup<R = void>(): R;
    parentView<R = NSTouchBarRangeView>(): R;
    setParentView<R = void, P0 = NSTouchBarRangeView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarRangeBackdropView<T = any> extends NSView {
      alloc<R = NSTouchBarRangeBackdropView>(): R;
      new: <R = NSTouchBarRangeBackdropView>() => R;
    }
  }
}

declare const NSTouchBarRangeBackdropView: cocoa.classes.NSTouchBarRangeBackdropView;
