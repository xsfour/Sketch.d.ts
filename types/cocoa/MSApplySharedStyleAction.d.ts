/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplySharedStyleAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    filteredLayersForStyle<R = unknown>(): R;
    applySharedStyle<R = void, P0 = unknown>(_applySharedStyle: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSApplySharedStyleAction<T = any> extends MSDocumentAction {
      alloc<R = MSApplySharedStyleAction>(): R;
      new: <R = MSApplySharedStyleAction>() => R;
    }
  }
}

declare const MSApplySharedStyleAction: cocoa.classes.MSApplySharedStyleAction;
