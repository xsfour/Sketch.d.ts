/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WebUIDelegate<T = any> {}
  namespace classes {
    export interface WebUIDelegate<T = any> {  }
  }
}

declare const WebUIDelegate: cocoa.classes.WebUIDelegate;
