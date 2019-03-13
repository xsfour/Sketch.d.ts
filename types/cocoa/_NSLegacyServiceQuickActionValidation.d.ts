/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickActionValidation<T = any> extends NSObject, _NSQuickActionValidationProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    initForItemSource_quickActions<R = unknown, P0 = unknown, P1 = unknown>(_initForItemSource: P0, _quickActions: P1): R;
    validQuickActions<R = NSSet>(): R;
    wantsAutovalidation<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLegacyServiceQuickActionValidation<T = any> extends NSObject, _NSQuickActionValidationProtocol {
      alloc<R = _NSLegacyServiceQuickActionValidation>(): R;
      new: <R = _NSLegacyServiceQuickActionValidation>() => R;
      automaticallyNotifiesObserversOfValidQuickActions<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
    }
  }
}
