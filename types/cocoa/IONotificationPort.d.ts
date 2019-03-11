/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface IONotificationPort<T = any> {}
  namespace classes {
    export interface IONotificationPort<T = any> {  }
  }
}

declare const IONotificationPort: cocoa.classes.IONotificationPort;
