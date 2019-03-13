/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberRoundedBackgroundSelectionStyle<T = any> extends NSScrubberSelectionStyle {
    dealloc<R = void>(): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrubberRoundedBackgroundSelectionStyle<T = any> extends NSScrubberSelectionStyle {
      alloc<R = _NSScrubberRoundedBackgroundSelectionStyle>(): R;
      new: <R = _NSScrubberRoundedBackgroundSelectionStyle>() => R;
    }
  }
}
