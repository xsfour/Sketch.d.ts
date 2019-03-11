/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewsTrigger<T = any> extends cocoa.BCSingleton {
    cxx_destruct<R = void>(): R;
    showURL_newsID<R = void, P0 = unknown, P1 = unknown>(_showURL: P0, _newsID: P1): R;
    shouldShowNewsWithID<R = boolean, P0 = unknown>(_shouldShowNewsWithID: P0): R;
    validateResult<R = void, P0 = unknown>(_validateResult: P0): R;
    checkForNews<R = void>(): R;
    url<R = unknown>(): R;
    init<R = unknown>(): R;
    windowController<R = cocoa.NSWindowController>(): R;
    setWindowController<R = void, P0 = cocoa.NSWindowController>(_v: P0): R;
    urlSession<R = cocoa.NSURLSession>(): R;
    setUrlSession<R = void, P0 = cocoa.NSURLSession>(_v: P0): R;
  }
  namespace classes {
    export interface MSNewsTrigger<T = any> extends cocoa.classes.BCSingleton {  }
  }
}

declare const MSNewsTrigger: cocoa.classes.MSNewsTrigger;
