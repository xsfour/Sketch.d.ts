/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenameLayerAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    renameLayer<R = void, P0 = unknown>(_renameLayer: P0): R;
  }
  namespace classes {
    export interface MSRenameLayerAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSRenameLayerAction>(): R;
      new: <R = MSRenameLayerAction>() => R;
    }
  }
}

declare const MSRenameLayerAction: cocoa.classes.MSRenameLayerAction;
