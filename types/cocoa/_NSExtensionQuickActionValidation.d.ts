/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionValidation<T = any> extends cocoa.NSObject, cocoa._NSQuickActionValidationProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    initForItemSource_quickActions<R = unknown, P0 = unknown, P1 = unknown>(_initForItemSource: P0, _quickActions: P1): R;
    validQuickActions<R = cocoa.NSSet>(): R;
    wantsAutovalidation<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSExtensionQuickActionValidation<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSQuickActionValidationProtocol {
      alloc<R = _NSExtensionQuickActionValidation>(): R;
      new: <R = _NSExtensionQuickActionValidation>() => R;
      automaticallyNotifiesObserversOfValidQuickActions<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
    }
  }
}
