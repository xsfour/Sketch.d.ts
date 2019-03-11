/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertImageAction<T = any> extends cocoa.MSBaseInsertAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    groupForInserting<R = unknown>(): R;
    importImagesFromURLs<R = void, P0 = unknown>(_importImagesFromURLs: P0): R;
    preferredMenuAction<R = string>(): R;
    insertImage<R = void, P0 = unknown>(_insertImage: P0): R;
  }
  namespace classes {
    export interface MSInsertImageAction<T = any> extends cocoa.classes.MSBaseInsertAction {
      alloc<R = MSInsertImageAction>(): R;
      new: <R = MSInsertImageAction>() => R;
    }
  }
}

declare const MSInsertImageAction: cocoa.classes.MSInsertImageAction;
