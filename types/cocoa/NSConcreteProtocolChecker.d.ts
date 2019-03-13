/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteProtocolChecker<T = any> extends NSProtocolChecker {
    target<R = unknown>(): R;
    protocol<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcreteProtocolChecker<T = any> extends NSProtocolChecker {  }
  }
}

declare const NSConcreteProtocolChecker: cocoa.classes.NSConcreteProtocolChecker;
