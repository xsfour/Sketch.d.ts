/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberOutlineSelectionStyle<T = any> extends cocoa.NSScrubberSelectionStyle {
    showsHighlight<R = boolean>(): R;
    setShowsHighlight<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrubberOutlineSelectionStyle<T = any> extends cocoa.classes.NSScrubberSelectionStyle {
      alloc<R = _NSScrubberOutlineSelectionStyle>(): R;
      new: <R = _NSScrubberOutlineSelectionStyle>() => R;
    }
  }
}
