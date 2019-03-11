/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WebView<T = any> {}
  namespace classes {
    export interface WebView<T = any> {  }
  }
}

declare const WebView: cocoa.classes.WebView;
