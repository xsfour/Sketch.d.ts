/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNilOrderedSetEnumerator<T = any> extends cocoa.NSEnumerator {
    nextObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSKeyValueNilOrderedSetEnumerator<T = any> extends cocoa.classes.NSEnumerator {  }
  }
}

declare const NSKeyValueNilOrderedSetEnumerator: cocoa.classes.NSKeyValueNilOrderedSetEnumerator;
