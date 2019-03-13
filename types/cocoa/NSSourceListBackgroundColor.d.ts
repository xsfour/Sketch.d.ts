/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSourceListBackgroundColor<T = any> extends NSDynamicNamedColor {
    resolvedColor<R = unknown>(): R;
    _displayColorForActiveState<R = unknown, P0 = boolean>(__displayColorForActiveState: P0): R;
    _isSourceListColor<R = boolean>(): R;
  }
  namespace classes {
    export interface NSSourceListBackgroundColor<T = any> extends NSDynamicNamedColor {
      alloc<R = NSSourceListBackgroundColor>(): R;
      new: <R = NSSourceListBackgroundColor>() => R;
    }
  }
}

declare const NSSourceListBackgroundColor: cocoa.classes.NSSourceListBackgroundColor;
