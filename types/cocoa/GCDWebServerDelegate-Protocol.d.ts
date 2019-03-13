/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface GCDWebServerDelegateProtocol<T = any> extends NSObjectProtocol {
    webServerDidStop<R = void, P0 = GCDWebServer>(_webServerDidStop: P0): R;
    webServerDidDisconnect<R = void, P0 = GCDWebServer>(_webServerDidDisconnect: P0): R;
    webServerDidConnect<R = void, P0 = GCDWebServer>(_webServerDidConnect: P0): R;
    webServerDidUpdateNATPortMapping<R = void, P0 = GCDWebServer>(_webServerDidUpdateNATPortMapping: P0): R;
    webServerDidCompleteBonjourRegistration<R = void, P0 = GCDWebServer>(_webServerDidCompleteBonjourRegistration: P0): R;
    webServerDidStart<R = void, P0 = GCDWebServer>(_webServerDidStart: P0): R;
  }
  namespace classes {
    export interface GCDWebServerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
