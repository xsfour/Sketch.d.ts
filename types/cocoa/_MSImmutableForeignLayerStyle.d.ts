/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignLayerStyle<T = any> extends cocoa.MSImmutableForeignStyle {}
  namespace classes {
    export interface _MSImmutableForeignLayerStyle<T = any> extends cocoa.classes.MSImmutableForeignStyle {
      alloc<R = _MSImmutableForeignLayerStyle>(): R;
      new: <R = _MSImmutableForeignLayerStyle>() => R;
    }
  }
}
