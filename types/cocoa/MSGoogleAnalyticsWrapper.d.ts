/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGoogleAnalyticsWrapper<T = any> extends cocoa.NSObject, cocoa.WebFrameLoadDelegateProtocol, cocoa.WebResourceLoadDelegateProtocol, cocoa.WebUIDelegateProtocol {
    cxx_destruct<R = void>(): R;
    webView_addMessageToConsole<R = void, P0 = unknown, P1 = unknown>(_webView: P0, _addMessageToConsole: P1): R;
    callMethod_arguments<R = void, P0 = unknown, P1 = unknown>(_callMethod: P0, _arguments: P1): R;
    sendAction_arguments<R = void, P0 = unknown, P1 = unknown>(_sendAction: P0, _arguments: P1): R;
    stop<R = void>(): R;
    start<R = void>(): R;
    queue<R = cocoa.NSMutableArray>(): R;
    setQueue<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    webViewReady<R = boolean>(): R;
    setWebViewReady<R = void, P0 = boolean>(_v: P0): R;
    siteID<R = cocoa.NSString>(): R;
    setSiteID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    webView<R = cocoa.WebView>(): R;
    setWebView<R = void, P0 = cocoa.WebView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGoogleAnalyticsWrapper<T = any> extends cocoa.classes.NSObject, cocoa.classes.WebFrameLoadDelegateProtocol, cocoa.classes.WebResourceLoadDelegateProtocol, cocoa.classes.WebUIDelegateProtocol {
      alloc<R = MSGoogleAnalyticsWrapper>(): R;
      new: <R = MSGoogleAnalyticsWrapper>() => R;
    }
  }
}

declare const MSGoogleAnalyticsWrapper: cocoa.classes.MSGoogleAnalyticsWrapper;
