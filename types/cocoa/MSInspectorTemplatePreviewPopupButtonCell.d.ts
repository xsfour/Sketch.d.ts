/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTemplatePreviewPopupButtonCell<T = any> extends MSInspectorPreviewPopupButtonCell {}
  namespace classes {
    export interface MSInspectorTemplatePreviewPopupButtonCell<T = any> extends MSInspectorPreviewPopupButtonCell {
      alloc<R = MSInspectorTemplatePreviewPopupButtonCell>(): R;
      new: <R = MSInspectorTemplatePreviewPopupButtonCell>() => R;
    }
  }
}

declare const MSInspectorTemplatePreviewPopupButtonCell: cocoa.classes.MSInspectorTemplatePreviewPopupButtonCell;
