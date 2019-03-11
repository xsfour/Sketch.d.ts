/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerDoubleTapButton<T = any> extends cocoa.NSView {
    handlePress<R = void, P0 = unknown>(_handlePress: P0): R;
    engage<R = void>(): R;
    highlight<R = void, P0 = boolean>(_highlight: P0): R;
    fallback<R = void>(): R;
    unsetFallbackTimer<R = void>(): R;
    setFallbackTimer<R = void>(): R;
    updateSubviewsForState<R = void>(): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_setState: P0): R;
    _defaultState<R = number>(): R;
    initWithArmedImage_successImage<R = unknown, P0 = unknown, P1 = unknown>(_initWithArmedImage: P0, _successImage: P1): R;
    actionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setActionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    prearmed<R = boolean>(): R;
    setPrearmed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerDoubleTapButton<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTouchBarColorPickerDoubleTapButton>(): R;
      new: <R = _NSTouchBarColorPickerDoubleTapButton>() => R;
    }
  }
}
