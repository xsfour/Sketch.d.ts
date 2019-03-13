/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchPathEnumerator<T = any> extends NSEnumerator {
    nextObject<R = unknown>(): R;
    initWithDirectory_domains<R = unknown, P0 = number, P1 = number>(_initWithDirectory: P0, _domains: P1): R;
  }
  namespace classes {
    export interface NSSearchPathEnumerator<T = any> extends NSEnumerator {  }
  }
}

declare const NSSearchPathEnumerator: cocoa.classes.NSSearchPathEnumerator;
