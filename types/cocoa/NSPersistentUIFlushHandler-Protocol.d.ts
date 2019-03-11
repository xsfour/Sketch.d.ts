/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIFlushHandlerProtocol<T = any> extends cocoa.NSObjectProtocol {
    flushForScheduler<R = void, P0 = cocoa.NSPersistentUIFlushScheduler>(_flushForScheduler: P0): R;
  }
  namespace classes {
    export interface NSPersistentUIFlushHandlerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSPersistentUIFlushHandlerProtocol: cocoa.classes.NSPersistentUIFlushHandlerProtocol;
