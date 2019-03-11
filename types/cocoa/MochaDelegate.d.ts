/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MochaDelegate<T = any> {}
  namespace classes {
    export interface MochaDelegate<T = any> {  }
  }
}

declare const MochaDelegate: cocoa.classes.MochaDelegate;
