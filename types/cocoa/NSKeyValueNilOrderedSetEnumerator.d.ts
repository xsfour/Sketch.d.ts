/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNilOrderedSetEnumerator<T = any> extends NSEnumerator {
    nextObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSKeyValueNilOrderedSetEnumerator<T = any> extends NSEnumerator {  }
  }
}

declare const NSKeyValueNilOrderedSetEnumerator: cocoa.classes.NSKeyValueNilOrderedSetEnumerator;
