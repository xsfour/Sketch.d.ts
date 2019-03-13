/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNilSetEnumerator<T = any> extends NSEnumerator {
    nextObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSKeyValueNilSetEnumerator<T = any> extends NSEnumerator {  }
  }
}

declare const NSKeyValueNilSetEnumerator: cocoa.classes.NSKeyValueNilSetEnumerator;
