/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWindowControllerContentProtocol<T = any> {
    webView<R = cocoa.WKWebView>(): R;
    setWebView<R = void, P0 = cocoa.WKWebView>(_v: P0): R;
  }
  namespace classes {
    export interface MSMirrorWindowControllerContentProtocol<T = any> {  }
  }
}

declare const MSMirrorWindowControllerContentProtocol: cocoa.classes.MSMirrorWindowControllerContentProtocol;
