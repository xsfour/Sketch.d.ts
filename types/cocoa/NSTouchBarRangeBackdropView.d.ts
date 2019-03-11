/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarRangeBackdropView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    _coreUIDrawOptions<R = unknown>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    _commonViewSetup<R = void>(): R;
    parentView<R = cocoa.NSTouchBarRangeView>(): R;
    setParentView<R = void, P0 = cocoa.NSTouchBarRangeView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarRangeBackdropView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTouchBarRangeBackdropView>(): R;
      new: <R = NSTouchBarRangeBackdropView>() => R;
    }
  }
}

declare const NSTouchBarRangeBackdropView: cocoa.classes.NSTouchBarRangeBackdropView;
