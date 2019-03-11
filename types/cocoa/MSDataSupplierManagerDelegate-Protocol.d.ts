/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierManagerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    pluginNameForIdentifier<R = cocoa.NSString, P0 = cocoa.NSString>(_pluginNameForIdentifier: P0): R;
    pluginIconForIdentifier<R = cocoa.NSImage, P0 = cocoa.NSString>(_pluginIconForIdentifier: P0): R;
    isThereAPluginForDataSupplier<R = boolean, P0 = cocoa.MSPluginDataSupplier>(_isThereAPluginForDataSupplier: P0): R;
    requestDataFromPluginDataSupplier_pluginContext<R = void, P0 = cocoa.MSPluginDataSupplier, P1 = cocoa.NSDictionary>(_requestDataFromPluginDataSupplier: P0, _pluginContext: P1): R;
  }
  namespace classes {
    export interface MSDataSupplierManagerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSDataSupplierManagerDelegateProtocol: cocoa.classes.MSDataSupplierManagerDelegateProtocol;
