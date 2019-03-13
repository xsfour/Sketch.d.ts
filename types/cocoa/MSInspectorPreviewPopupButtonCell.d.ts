/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPreviewPopupButtonCell<T = any> extends MSInspectorPopUpButtonCell {
    cxx_destruct<R = void>(): R;
    previewImage<R = NSImage>(): R;
    setPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorPreviewPopupButtonCell<T = any> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorPreviewPopupButtonCell>(): R;
      new: <R = MSInspectorPreviewPopupButtonCell>() => R;
    }
  }
}

declare const MSInspectorPreviewPopupButtonCell: cocoa.classes.MSInspectorPreviewPopupButtonCell;
