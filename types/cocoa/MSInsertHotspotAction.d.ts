/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertHotspotAction<T = any> extends cocoa.MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    insertHotspot<R = void, P0 = unknown>(_insertHotspot: P0): R;
    preferredMenuAction<R = string>(): R;
  }
  namespace classes {
    export interface MSInsertHotspotAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSInsertHotspotAction>(): R;
      new: <R = MSInsertHotspotAction>() => R;
    }
  }
}

declare const MSInsertHotspotAction: cocoa.classes.MSInsertHotspotAction;
