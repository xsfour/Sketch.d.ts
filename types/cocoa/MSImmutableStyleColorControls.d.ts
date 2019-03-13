/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleColorControls<T = any> extends _MSImmutableStyleColorControls {
    renderBitmapEffects<R = unknown, P0 = unknown>(_renderBitmapEffects: P0): R;
  }
  namespace classes {
    export interface MSImmutableStyleColorControls<T = any> extends _MSImmutableStyleColorControls {
      alloc<R = MSImmutableStyleColorControls>(): R;
      new: <R = MSImmutableStyleColorControls>() => R;
    }
  }
}

declare const MSImmutableStyleColorControls: cocoa.classes.MSImmutableStyleColorControls;
