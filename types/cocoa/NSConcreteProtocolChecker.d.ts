/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteProtocolChecker<T = any> extends cocoa.NSProtocolChecker {
    target<R = unknown>(): R;
    protocol<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcreteProtocolChecker<T = any> extends cocoa.classes.NSProtocolChecker {  }
  }
}

declare const NSConcreteProtocolChecker: cocoa.classes.NSConcreteProtocolChecker;
