/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStoragePool<T = any> extends cocoa.BCObjectPool, cocoa.MSFirstLineTypesetterDelegateProtocol {
    recycleTextStorage<R = void, P0 = unknown>(_recycleTextStorage: P0): R;
    vendTextStorage<R = unknown>(): R;
    initWithTextLayer<R = unknown, P0 = unknown>(_initWithTextLayer: P0): R;
    baselineAdjustmentForLayoutManager<R = number>(): R;
    setBaselineAdjustmentForLayoutManager<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSTextStoragePool<T = any> extends cocoa.classes.BCObjectPool, cocoa.classes.MSFirstLineTypesetterDelegateProtocol {  }
  }
}

declare const MSTextStoragePool: cocoa.classes.MSTextStoragePool;
