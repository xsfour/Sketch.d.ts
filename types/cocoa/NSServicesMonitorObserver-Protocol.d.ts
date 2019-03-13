/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesMonitorObserverProtocol<T = any> extends NSObjectProtocol {
    servicesDidChange<R = void>(): R;
  }
  namespace classes {
    export interface NSServicesMonitorObserverProtocol<T = any> extends NSObjectProtocol {  }
  }
}
