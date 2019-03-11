/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface objc_method_description<T = any> {}
  namespace classes {
    export interface objc_method_description<T = any> {  }
  }
}

declare const objc_method_description: cocoa.classes.objc_method_description;
