/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface isQueueing<T = any> {}
  namespace classes {
    export interface isQueueing<T = any> {  }
  }
}

declare const isQueueing: cocoa.classes.isQueueing;
