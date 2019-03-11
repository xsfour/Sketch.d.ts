/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutoContentAccessingProxy<T = any> extends cocoa.NSProxy {}
  namespace classes {
    export interface NSAutoContentAccessingProxy<T = any> extends cocoa.classes.NSProxy {
      proxyWithTarget<R = unknown, P0 = unknown>(_proxyWithTarget: P0): R;
    }
  }
}

declare const NSAutoContentAccessingProxy: cocoa.classes.NSAutoContentAccessingProxy;
