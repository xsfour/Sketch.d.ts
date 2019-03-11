/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface objc_ivar<T = any> {}
  namespace classes {
    export interface objc_ivar<T = any> {  }
  }
}

declare const objc_ivar: cocoa.classes.objc_ivar;
