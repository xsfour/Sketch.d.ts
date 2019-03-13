/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomBlurInspectorItem<T = any> extends MSBaseBlurInspectorItem {
    editZoomCenter<R = void, P0 = unknown>(_editZoomCenter: P0): R;
    handlerFocusDidChange<R = void, P0 = unknown>(_handlerFocusDidChange: P0): R;
    editOriginButton<R = NSButton>(): R;
    setEditOriginButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSZoomBlurInspectorItem<T = any> extends MSBaseBlurInspectorItem {
      alloc<R = MSZoomBlurInspectorItem>(): R;
      new: <R = MSZoomBlurInspectorItem>() => R;
    }
  }
}

declare const MSZoomBlurInspectorItem: cocoa.classes.MSZoomBlurInspectorItem;
