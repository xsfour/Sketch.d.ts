/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WKScriptMessageHandlerProtocol<T = any> extends cocoa.NSObjectProtocol {
    userContentController_didReceiveScriptMessage<R = void, P0 = cocoa.WKUserContentController, P1 = cocoa.WKScriptMessage>(_userContentController: P0, _didReceiveScriptMessage: P1): R;
  }
  namespace classes {
    export interface WKScriptMessageHandlerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const WKScriptMessageHandlerProtocol: cocoa.classes.WKScriptMessageHandlerProtocol;
