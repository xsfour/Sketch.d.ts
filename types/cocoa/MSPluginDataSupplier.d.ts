/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginDataSupplier<T = any> extends cocoa.MSDataSupplier {
    valid<R = boolean>(): R;
    initWithPluginIdentifier_commandIdentifier_dataName_dataTypeStringRepresentation_dynamicDataKey<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithPluginIdentifier: P0, _commandIdentifier: P1, _dataName: P2, _dataTypeStringRepresentation: P3, _dynamicDataKey: P4): R;
    registered<R = boolean>(): R;
    setRegistered<R = void, P0 = boolean>(_v: P0): R;
    dynamicDataKey<R = cocoa.NSString>(): R;
    commandIdentifier<R = cocoa.NSString>(): R;
    pluginIdentifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSPluginDataSupplier<T = any> extends cocoa.classes.MSDataSupplier {
      alloc<R = MSPluginDataSupplier>(): R;
      new: <R = MSPluginDataSupplier>() => R;
      identifierWithPluginIdentifier_commandIdentifier_dynamicDataKey<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_identifierWithPluginIdentifier: P0, _commandIdentifier: P1, _dynamicDataKey: P2): R;
    }
  }
}

declare const MSPluginDataSupplier: cocoa.classes.MSPluginDataSupplier;
