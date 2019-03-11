/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface fQuit<T = any> {}
  namespace classes {
    export interface fQuit<T = any> {  }
  }
}

declare const fQuit: cocoa.classes.fQuit;
