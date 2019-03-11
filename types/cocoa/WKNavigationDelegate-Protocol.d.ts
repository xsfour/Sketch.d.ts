/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WKNavigationDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    webViewWebContentProcessDidTerminate<R = void, P0 = cocoa.WKWebView>(_webViewWebContentProcessDidTerminate: P0): R;
    webView_didReceiveAuthenticationChallenge_completionHandler<R = void, P0 = cocoa.WKWebView, P1 = cocoa.NSURLAuthenticationChallenge, P2 = cocoa.CDUnknownBlockType>(_webView: P0, _didReceiveAuthenticationChallenge: P1, _completionHandler: P2): R;
    webView_didFailNavigation_withError<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigation, P2 = cocoa.NSError>(_webView: P0, _didFailNavigation: P1, _withError: P2): R;
    webView_didFinishNavigation<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigation>(_webView: P0, _didFinishNavigation: P1): R;
    webView_didCommitNavigation<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigation>(_webView: P0, _didCommitNavigation: P1): R;
    webView_didFailProvisionalNavigation_withError<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigation, P2 = cocoa.NSError>(_webView: P0, _didFailProvisionalNavigation: P1, _withError: P2): R;
    webView_didReceiveServerRedirectForProvisionalNavigation<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigation>(_webView: P0, _didReceiveServerRedirectForProvisionalNavigation: P1): R;
    webView_didStartProvisionalNavigation<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigation>(_webView: P0, _didStartProvisionalNavigation: P1): R;
    webView_decidePolicyForNavigationResponse_decisionHandler<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigationResponse, P2 = cocoa.CDUnknownBlockType>(_webView: P0, _decidePolicyForNavigationResponse: P1, _decisionHandler: P2): R;
    webView_decidePolicyForNavigationAction_decisionHandler<R = void, P0 = cocoa.WKWebView, P1 = cocoa.WKNavigationAction, P2 = cocoa.CDUnknownBlockType>(_webView: P0, _decidePolicyForNavigationAction: P1, _decisionHandler: P2): R;
  }
  namespace classes {
    export interface WKNavigationDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const WKNavigationDelegateProtocol: cocoa.classes.WKNavigationDelegateProtocol;
