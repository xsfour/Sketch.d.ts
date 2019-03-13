/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertSymbolOrDetachInstancesAction<T = any> extends MSDocumentAction {
    hasDynamicTitle<R = boolean>(): R;
    convertSymbolMastersToArtboards<R = void, P0 = unknown>(_convertSymbolMastersToArtboards: P0): R;
    containsSymbolMasters<R = boolean, P0 = unknown>(_containsSymbolMasters: P0): R;
    detachSymbolInstances<R = void, P0 = unknown>(_detachSymbolInstances: P0): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSConvertSymbolOrDetachInstancesAction<T = any> extends MSDocumentAction {
      alloc<R = MSConvertSymbolOrDetachInstancesAction>(): R;
      new: <R = MSConvertSymbolOrDetachInstancesAction>() => R;
    }
  }
}

declare const MSConvertSymbolOrDetachInstancesAction: cocoa.classes.MSConvertSymbolOrDetachInstancesAction;
