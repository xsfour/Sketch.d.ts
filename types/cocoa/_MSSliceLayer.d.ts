/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSliceLayer<T = any> extends cocoa.MSLayer {
    backgroundColor<R = cocoa.MSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSSliceLayer<T = any> extends cocoa.classes.MSLayer {
      alloc<R = _MSSliceLayer>(): R;
      new: <R = _MSSliceLayer>() => R;
    }
  }
}
