/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberRoundedBackgroundSelectionStyle<T = any> extends cocoa.NSScrubberSelectionStyle {
    dealloc<R = void>(): R;
    tintColor<R = cocoa.NSColor>(): R;
    setTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrubberRoundedBackgroundSelectionStyle<T = any> extends cocoa.classes.NSScrubberSelectionStyle {
      alloc<R = _NSScrubberRoundedBackgroundSelectionStyle>(): R;
      new: <R = _NSScrubberRoundedBackgroundSelectionStyle>() => R;
    }
  }
}
