/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesMonitorObserverProtocol<T = any> extends cocoa.NSObjectProtocol {
    servicesDidChange<R = void>(): R;
  }
  namespace classes {
    export interface NSServicesMonitorObserverProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSServicesMonitorObserverProtocol: cocoa.classes.NSServicesMonitorObserverProtocol;
