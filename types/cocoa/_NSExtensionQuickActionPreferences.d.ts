/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionPreferences<T = any> extends cocoa.NSObject, cocoa._NSQuickActionPreferencesProtocol {
    cxx_destruct<R = void>(): R;
    initWithPresentation<R = unknown, P0 = unknown>(_initWithPresentation: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSExtensionQuickActionPreferences<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSQuickActionPreferencesProtocol {
      alloc<R = _NSExtensionQuickActionPreferences>(): R;
      new: <R = _NSExtensionQuickActionPreferences>() => R;
    }
  }
}
