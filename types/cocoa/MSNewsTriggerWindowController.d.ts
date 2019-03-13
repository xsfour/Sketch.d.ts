/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewsTriggerWindowController<T = any> extends CHWindowController, WKNavigationDelegateProtocol {
    dontShowNewsWithIDAnymore<R = void, P0 = unknown>(_dontShowNewsWithIDAnymore: P0): R;
    initWithURL_newsID<R = unknown, P0 = unknown, P1 = unknown>(_initWithURL: P0, _newsID: P1): R;
    finishedLoadingData<R = boolean>(): R;
    setFinishedLoadingData<R = void, P0 = boolean>(_v: P0): R;
    dontShowAgainButton<R = NSButton>(): R;
    setDontShowAgainButton<R = void, P0 = NSButton>(_v: P0): R;
    webView<R = WKWebView>(): R;
    setWebView<R = void, P0 = WKWebView>(_v: P0): R;
    newsID<R = NSString>(): R;
    setNewsID<R = void, P0 = NSString>(_v: P0): R;
    url<R = NSURL>(): R;
    setUrl<R = void, P0 = NSURL>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSNewsTriggerWindowController<T = any> extends CHWindowController, WKNavigationDelegateProtocol {
      alloc<R = MSNewsTriggerWindowController>(): R;
      new: <R = MSNewsTriggerWindowController>() => R;
    }
  }
}

declare const MSNewsTriggerWindowController: cocoa.classes.MSNewsTriggerWindowController;
