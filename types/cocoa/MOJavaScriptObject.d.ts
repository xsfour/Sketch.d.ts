/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOJavaScriptObject<T = any> {}
  namespace classes {
    export interface MOJavaScriptObject<T = any> {  }
  }
}

declare const MOJavaScriptObject: cocoa.classes.MOJavaScriptObject;
