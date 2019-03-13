/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickActionProviderSource<T = any> extends NSObject, NSServicesMonitorObserverProtocol, _NSQuickActionProviderSourceProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    initWithPresentation<R = unknown, P0 = unknown>(_initWithPresentation: P0): R;
    quickActions<R = NSSet>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLegacyServiceQuickActionProviderSource<T = any> extends NSObject, NSServicesMonitorObserverProtocol, _NSQuickActionProviderSourceProtocol {
      alloc<R = _NSLegacyServiceQuickActionProviderSource>(): R;
      new: <R = _NSLegacyServiceQuickActionProviderSource>() => R;
      automaticallyNotifiesObserversOfQuickActions<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
      providerSourceWithPresentation<R = unknown, P0 = unknown>(_providerSourceWithPresentation: P0): R;
    }
  }
}
