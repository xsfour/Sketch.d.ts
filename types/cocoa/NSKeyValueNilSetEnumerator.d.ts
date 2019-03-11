/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNilSetEnumerator<T = any> extends cocoa.NSEnumerator {
    nextObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSKeyValueNilSetEnumerator<T = any> extends cocoa.classes.NSEnumerator {  }
  }
}

declare const NSKeyValueNilSetEnumerator: cocoa.classes.NSKeyValueNilSetEnumerator;
