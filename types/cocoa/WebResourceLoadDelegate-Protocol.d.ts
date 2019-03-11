/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WebResourceLoadDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    webView_plugInFailedWithError_dataSource<R = void, P0 = cocoa.WebView, P1 = cocoa.NSError, P2 = cocoa.WebDataSource>(_webView: P0, _plugInFailedWithError: P1, _dataSource: P2): R;
    webView_resource_didFailLoadingWithError_fromDataSource<R = void, P0 = cocoa.WebView, P1 = unknown, P2 = cocoa.NSError, P3 = cocoa.WebDataSource>(_webView: P0, _resource: P1, _didFailLoadingWithError: P2, _fromDataSource: P3): R;
    webView_resource_didFinishLoadingFromDataSource<R = void, P0 = cocoa.WebView, P1 = unknown, P2 = cocoa.WebDataSource>(_webView: P0, _resource: P1, _didFinishLoadingFromDataSource: P2): R;
    webView_resource_didReceiveContentLength_fromDataSource<R = void, P0 = cocoa.WebView, P1 = unknown, P2 = number, P3 = cocoa.WebDataSource>(_webView: P0, _resource: P1, _didReceiveContentLength: P2, _fromDataSource: P3): R;
    webView_resource_didReceiveResponse_fromDataSource<R = void, P0 = cocoa.WebView, P1 = unknown, P2 = cocoa.NSURLResponse, P3 = cocoa.WebDataSource>(_webView: P0, _resource: P1, _didReceiveResponse: P2, _fromDataSource: P3): R;
    webView_resource_didCancelAuthenticationChallenge_fromDataSource<R = void, P0 = cocoa.WebView, P1 = unknown, P2 = cocoa.NSURLAuthenticationChallenge, P3 = cocoa.WebDataSource>(_webView: P0, _resource: P1, _didCancelAuthenticationChallenge: P2, _fromDataSource: P3): R;
    webView_resource_didReceiveAuthenticationChallenge_fromDataSource<R = void, P0 = cocoa.WebView, P1 = unknown, P2 = cocoa.NSURLAuthenticationChallenge, P3 = cocoa.WebDataSource>(_webView: P0, _resource: P1, _didReceiveAuthenticationChallenge: P2, _fromDataSource: P3): R;
    webView_resource_willSendRequest_redirectResponse_fromDataSource<R = cocoa.NSURLRequest, P0 = cocoa.WebView, P1 = unknown, P2 = cocoa.NSURLRequest, P3 = cocoa.NSURLResponse, P4 = cocoa.WebDataSource>(_webView: P0, _resource: P1, _willSendRequest: P2, _redirectResponse: P3, _fromDataSource: P4): R;
    webView_identifierForInitialRequest_fromDataSource<R = unknown, P0 = cocoa.WebView, P1 = cocoa.NSURLRequest, P2 = cocoa.WebDataSource>(_webView: P0, _identifierForInitialRequest: P1, _fromDataSource: P2): R;
  }
  namespace classes {
    export interface WebResourceLoadDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const WebResourceLoadDelegateProtocol: cocoa.classes.WebResourceLoadDelegateProtocol;
