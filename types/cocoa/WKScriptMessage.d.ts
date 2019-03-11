/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WKScriptMessage<T = any> {}
  namespace classes {
    export interface WKScriptMessage<T = any> {  }
  }
}

declare const WKScriptMessage: cocoa.classes.WKScriptMessage;
