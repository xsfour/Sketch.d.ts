/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelfContainedHighLevelExporter<T = any> extends cocoa.MSHighLevelExporter, cocoa.MSHighLevelExportDelegateProtocol {
    initWithOptions_driver<R = unknown, P0 = unknown, P1 = unknown>(_initWithOptions: P0, _driver: P1): R;
    initWithOptions<R = unknown, P0 = unknown>(_initWithOptions: P0): R;
    infoStack<R = cocoa.NSMutableArray>(): R;
    setInfoStack<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    infoRecord<R = cocoa.NSMutableDictionary>(): R;
    setInfoRecord<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    options<R = cocoa.NSDictionary>(): R;
    setOptions<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    errors<R = cocoa.NSMutableArray>(): R;
    setErrors<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    output<R = cocoa.NSMutableString>(): R;
    setOutput<R = void, P0 = cocoa.NSMutableString>(_v: P0): R;
    results<R = cocoa.NSDictionary>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSelfContainedHighLevelExporter<T = any> extends cocoa.classes.MSHighLevelExporter, cocoa.classes.MSHighLevelExportDelegateProtocol {
      alloc<R = MSSelfContainedHighLevelExporter>(): R;
      new: <R = MSSelfContainedHighLevelExporter>() => R;
    }
  }
}

declare const MSSelfContainedHighLevelExporter: cocoa.classes.MSSelfContainedHighLevelExporter;
