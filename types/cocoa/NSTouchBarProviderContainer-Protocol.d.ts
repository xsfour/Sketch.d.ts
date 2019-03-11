/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarProviderContainerProtocol<T = any> extends cocoa.NSTouchBarProviderProtocol {
    NS_touchBarProvidersKeyPaths<R = cocoa.NSSet>(): R;
    NS_touchBarProviders<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSTouchBarProviderContainerProtocol<T = any> extends cocoa.classes.NSTouchBarProviderProtocol {  }
  }
}

declare const NSTouchBarProviderContainerProtocol: cocoa.classes.NSTouchBarProviderContainerProtocol;
