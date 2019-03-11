/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCanvasPreferencePane<T = any> extends cocoa.MSPreferencePane {
    refreshOpenDocuments<R = void>(): R;
    adjustFlowColorAction<R = void, P0 = unknown>(_adjustFlowColorAction: P0): R;
    adjustSnapColorAction<R = void, P0 = unknown>(_adjustSnapColorAction: P0): R;
    flowColorLabel<R = cocoa.NSTextField>(): R;
    setFlowColorLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    flowColorWell<R = cocoa.NSColorWell>(): R;
    setFlowColorWell<R = void, P0 = cocoa.NSColorWell>(_v: P0): R;
  }
  namespace classes {
    export interface MSCanvasPreferencePane<T = any> extends cocoa.classes.MSPreferencePane {
      alloc<R = MSCanvasPreferencePane>(): R;
      new: <R = MSCanvasPreferencePane>() => R;
    }
  }
}

declare const MSCanvasPreferencePane: cocoa.classes.MSCanvasPreferencePane;
