/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertTextLayerAction<T = any> extends MSBaseInsertAction {
    isSelectable<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    insertTextLayer<R = void, P0 = unknown>(_insertTextLayer: P0): R;
  }
  namespace classes {
    export interface MSInsertTextLayerAction<T = any> extends MSBaseInsertAction {
      alloc<R = MSInsertTextLayerAction>(): R;
      new: <R = MSInsertTextLayerAction>() => R;
    }
  }
}

declare const MSInsertTextLayerAction: cocoa.classes.MSInsertTextLayerAction;
