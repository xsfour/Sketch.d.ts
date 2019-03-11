/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WebScriptObject<T = any> {}
  namespace classes {
    export interface WebScriptObject<T = any> {  }
  }
}

declare const WebScriptObject: cocoa.classes.WebScriptObject;
