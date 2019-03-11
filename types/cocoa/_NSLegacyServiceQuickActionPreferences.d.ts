/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickActionPreferences<T = any> extends cocoa.NSObject, cocoa._NSQuickActionPreferencesProtocol {
    cxx_destruct<R = void>(): R;
    initWithLegacyServicePresentationMode<R = unknown, P0 = unknown>(_initWithLegacyServicePresentationMode: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLegacyServiceQuickActionPreferences<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSQuickActionPreferencesProtocol {
      alloc<R = _NSLegacyServiceQuickActionPreferences>(): R;
      new: <R = _NSLegacyServiceQuickActionPreferences>() => R;
    }
  }
}
