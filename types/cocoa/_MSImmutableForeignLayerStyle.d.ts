/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignLayerStyle<T = any> extends MSImmutableForeignStyle {}
  namespace classes {
    export interface _MSImmutableForeignLayerStyle<T = any> extends MSImmutableForeignStyle {
      alloc<R = _MSImmutableForeignLayerStyle>(): R;
      new: <R = _MSImmutableForeignLayerStyle>() => R;
    }
  }
}
