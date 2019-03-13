/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutoContentAccessingProxy<T = any> extends NSProxy {}
  namespace classes {
    export interface NSAutoContentAccessingProxy<T = any> extends NSProxy {
      proxyWithTarget<R = unknown, P0 = unknown>(_proxyWithTarget: P0): R;
    }
  }
}

declare const NSAutoContentAccessingProxy: cocoa.classes.NSAutoContentAccessingProxy;
