/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWindowControllerContentProtocol<T = any> {
    webView<R = WKWebView>(): R;
    setWebView<R = void, P0 = WKWebView>(_v: P0): R;
  }
  namespace classes {
    export interface MSMirrorWindowControllerContentProtocol<T = any> {  }
  }
}
