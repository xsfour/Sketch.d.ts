/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginCommandSpecifier<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    isEqualToCommandSpecifier<R = boolean, P0 = unknown>(_isEqualToCommandSpecifier: P0): R;
    hash<R = number>(): R;
    stringValue<R = unknown>(): R;
    initWithPluginBundleIdentifier_commandIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_initWithPluginBundleIdentifier: P0, _commandIdentifier: P1): R;
    commandIdentifier<R = cocoa.NSString>(): R;
    pluginBundleIdentifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSPluginCommandSpecifier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSPluginCommandSpecifier>(): R;
      new: <R = MSPluginCommandSpecifier>() => R;
    }
  }
}

declare const MSPluginCommandSpecifier: cocoa.classes.MSPluginCommandSpecifier;
