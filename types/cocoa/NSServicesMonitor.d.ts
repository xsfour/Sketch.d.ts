/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesMonitor<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    servicesDidChange<R = void, P0 = unknown>(_servicesDidChange: P0): R;
    dealloc<R = void>(): R;
    cancel<R = void>(): R;
    _initWithObserver<R = unknown, P0 = unknown>(__initWithObserver: P0): R;
    initWithObserver_presentationMode<R = unknown, P0 = unknown, P1 = unknown>(_initWithObserver: P0, _presentationMode: P1): R;
    orderedServices<R = NSArray>(): R;
    services<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSServicesMonitor<T = any> extends NSObject {
      alloc<R = NSServicesMonitor>(): R;
      new: <R = NSServicesMonitor>() => R;
      monitorWithObserver<R = unknown, P0 = unknown>(_monitorWithObserver: P0): R;
      monitorWithObserver_bundleURL<R = unknown, P0 = unknown, P1 = unknown>(_monitorWithObserver: P0, _bundleURL: P1): R;
      monitorWithObserver_availablePresentationMode<R = unknown, P0 = unknown, P1 = unknown>(_monitorWithObserver: P0, _availablePresentationMode: P1): R;
      monitorWithObserver_presentationMode<R = unknown, P0 = unknown, P1 = unknown>(_monitorWithObserver: P0, _presentationMode: P1): R;
    }
  }
}

declare const NSServicesMonitor: cocoa.classes.NSServicesMonitor;
