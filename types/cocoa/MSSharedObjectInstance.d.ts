/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectInstance<T = any> {}
  namespace classes {
    export interface MSSharedObjectInstance<T = any> {  }
  }
}

declare const MSSharedObjectInstance: cocoa.classes.MSSharedObjectInstance;
