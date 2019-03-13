/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorRelevancyCore<T = any> extends NSObject, _NSLevelIndicatorCoreProtocol {
    _coreUIDrawOptionsForState<R = unknown, P0 = unknown>(__coreUIDrawOptionsForState: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLevelIndicatorRelevancyCore<T = any> extends NSObject, _NSLevelIndicatorCoreProtocol {
      alloc<R = _NSLevelIndicatorRelevancyCore>(): R;
      new: <R = _NSLevelIndicatorRelevancyCore>() => R;
    }
  }
}
