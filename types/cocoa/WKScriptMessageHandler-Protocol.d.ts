/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WKScriptMessageHandlerProtocol<T = any> extends NSObjectProtocol {
    userContentController_didReceiveScriptMessage<R = void, P0 = WKUserContentController, P1 = WKScriptMessage>(_userContentController: P0, _didReceiveScriptMessage: P1): R;
  }
  namespace classes {
    export interface WKScriptMessageHandlerProtocol<T = any> extends NSObjectProtocol {  }
  }
}
