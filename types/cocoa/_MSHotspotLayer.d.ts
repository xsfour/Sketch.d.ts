/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSHotspotLayer<T = any> extends MSLayer {}
  namespace classes {
    export interface _MSHotspotLayer<T = any> extends MSLayer {
      alloc<R = _MSHotspotLayer>(): R;
      new: <R = _MSHotspotLayer>() => R;
    }
  }
}
