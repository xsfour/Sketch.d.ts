/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewsTriggerWindowController<T = any> extends cocoa.CHWindowController, cocoa.WKNavigationDelegateProtocol {
    dontShowNewsWithIDAnymore<R = void, P0 = unknown>(_dontShowNewsWithIDAnymore: P0): R;
    initWithURL_newsID<R = unknown, P0 = unknown, P1 = unknown>(_initWithURL: P0, _newsID: P1): R;
    finishedLoadingData<R = boolean>(): R;
    setFinishedLoadingData<R = void, P0 = boolean>(_v: P0): R;
    dontShowAgainButton<R = cocoa.NSButton>(): R;
    setDontShowAgainButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    webView<R = cocoa.WKWebView>(): R;
    setWebView<R = void, P0 = cocoa.WKWebView>(_v: P0): R;
    newsID<R = cocoa.NSString>(): R;
    setNewsID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    url<R = cocoa.NSURL>(): R;
    setUrl<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSNewsTriggerWindowController<T = any> extends cocoa.classes.CHWindowController, cocoa.classes.WKNavigationDelegateProtocol {
      alloc<R = MSNewsTriggerWindowController>(): R;
      new: <R = MSNewsTriggerWindowController>() => R;
    }
  }
}

declare const MSNewsTriggerWindowController: cocoa.classes.MSNewsTriggerWindowController;
