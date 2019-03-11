/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportAction<T = any> extends cocoa.MSDocumentAction {
    baseNameForSlice<R = unknown>(): R;
    rectForExportingEntirePage<R = cocoa.CGRect>(): R;
    determineRectForInitialSliceWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_determineRectForInitialSliceWithCompletionHandler: P0): R;
    createInitialSliceWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_createInitialSliceWithCompletionHandler: P0): R;
    showInspectorPanelIfNecessary<R = void>(): R;
    hasArtboardsWitNoExportFormats<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    export<R = void, P0 = unknown>(_export: P0): R;
  }
  namespace classes {
    export interface MSExportAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSExportAction>(): R;
      new: <R = MSExportAction>() => R;
    }
  }
}

declare const MSExportAction: cocoa.classes.MSExportAction;
