/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberViewClassSelectionStyle<T = any> extends NSScrubberSelectionStyle {
    initWithViewClass<R = unknown, P0 = unknown>(_initWithViewClass: P0): R;
  }
  namespace classes {
    export interface _NSScrubberViewClassSelectionStyle<T = any> extends NSScrubberSelectionStyle {
      alloc<R = _NSScrubberViewClassSelectionStyle>(): R;
      new: <R = _NSScrubberViewClassSelectionStyle>() => R;
    }
  }
}
