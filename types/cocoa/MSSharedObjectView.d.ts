/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectView<T = any> extends cocoa.NSView {
    previewDirty<R = boolean>(): R;
    setPreviewDirty<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSSharedObjectView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSSharedObjectView>(): R;
      new: <R = MSSharedObjectView>() => R;
    }
  }
}

declare const MSSharedObjectView: cocoa.classes.MSSharedObjectView;
