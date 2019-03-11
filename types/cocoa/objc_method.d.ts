/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface objc_method<T = any> {}
  namespace classes {
    export interface objc_method<T = any> {  }
  }
}

declare const objc_method: cocoa.classes.objc_method;
