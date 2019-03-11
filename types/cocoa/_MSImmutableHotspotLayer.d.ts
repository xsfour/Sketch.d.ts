/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableHotspotLayer<T = any> extends cocoa.MSImmutableLayer {}
  namespace classes {
    export interface _MSImmutableHotspotLayer<T = any> extends cocoa.classes.MSImmutableLayer {
      alloc<R = _MSImmutableHotspotLayer>(): R;
      new: <R = _MSImmutableHotspotLayer>() => R;
    }
  }
}
