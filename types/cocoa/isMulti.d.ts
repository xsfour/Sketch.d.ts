/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface isMulti<T = any> {}
  namespace classes {
    export interface isMulti<T = any> {  }
  }
}

declare const isMulti: cocoa.classes.isMulti;
