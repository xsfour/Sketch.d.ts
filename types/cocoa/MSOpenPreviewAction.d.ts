/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenPreviewAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    validate<R = boolean>(): R;
    openMirrorPreview<R = void, P0 = unknown>(_openMirrorPreview: P0): R;
  }
  namespace classes {
    export interface MSOpenPreviewAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSOpenPreviewAction>(): R;
      new: <R = MSOpenPreviewAction>() => R;
    }
  }
}

declare const MSOpenPreviewAction: cocoa.classes.MSOpenPreviewAction;
