/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarProviderContainerProtocol<T = any> extends NSTouchBarProviderProtocol {
    NS_touchBarProvidersKeyPaths<R = NSSet>(): R;
    NS_touchBarProviders<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSTouchBarProviderContainerProtocol<T = any> extends NSTouchBarProviderProtocol {  }
  }
}
