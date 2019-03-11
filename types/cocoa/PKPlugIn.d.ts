/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PKPlugIn<T = any> {}
  namespace classes {
    export interface PKPlugIn<T = any> {  }
  }
}

declare const PKPlugIn: cocoa.classes.PKPlugIn;
