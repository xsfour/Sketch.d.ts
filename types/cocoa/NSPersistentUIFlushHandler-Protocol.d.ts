/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIFlushHandlerProtocol<T = any> extends NSObjectProtocol {
    flushForScheduler<R = void, P0 = NSPersistentUIFlushScheduler>(_flushForScheduler: P0): R;
  }
  namespace classes {
    export interface NSPersistentUIFlushHandlerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
