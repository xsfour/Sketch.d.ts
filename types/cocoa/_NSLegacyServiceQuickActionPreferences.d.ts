/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickActionPreferences<T = any> extends NSObject, _NSQuickActionPreferencesProtocol {
    cxx_destruct<R = void>(): R;
    initWithLegacyServicePresentationMode<R = unknown, P0 = unknown>(_initWithLegacyServicePresentationMode: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLegacyServiceQuickActionPreferences<T = any> extends NSObject, _NSQuickActionPreferencesProtocol {
      alloc<R = _NSLegacyServiceQuickActionPreferences>(): R;
      new: <R = _NSLegacyServiceQuickActionPreferences>() => R;
    }
  }
}
