/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorRelevancyCore<T = any> extends cocoa.NSObject, cocoa._NSLevelIndicatorCoreProtocol {
    _coreUIDrawOptionsForState<R = unknown, P0 = unknown>(__coreUIDrawOptionsForState: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLevelIndicatorRelevancyCore<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSLevelIndicatorCoreProtocol {
      alloc<R = _NSLevelIndicatorRelevancyCore>(): R;
      new: <R = _NSLevelIndicatorRelevancyCore>() => R;
    }
  }
}
