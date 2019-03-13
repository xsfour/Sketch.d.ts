/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertToOutlinesAction<T = any> extends MSDocumentAction {
    validate<R = boolean>(): R;
    isFirstLayerText<R = boolean>(): R;
    historyMomentTitle<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    convertToOutlines<R = void, P0 = unknown>(_convertToOutlines: P0): R;
  }
  namespace classes {
    export interface MSConvertToOutlinesAction<T = any> extends MSDocumentAction {
      alloc<R = MSConvertToOutlinesAction>(): R;
      new: <R = MSConvertToOutlinesAction>() => R;
    }
  }
}

declare const MSConvertToOutlinesAction: cocoa.classes.MSConvertToOutlinesAction;
