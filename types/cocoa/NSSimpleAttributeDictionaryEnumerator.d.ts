/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleAttributeDictionaryEnumerator<T = any> extends cocoa.NSEnumerator {
    dealloc<R = void>(): R;
    nextObject<R = unknown>(): R;
    initWithAttributeDictionary<R = unknown, P0 = unknown>(_initWithAttributeDictionary: P0): R;
  }
  namespace classes {
    export interface NSSimpleAttributeDictionaryEnumerator<T = any> extends cocoa.classes.NSEnumerator {  }
  }
}

declare const NSSimpleAttributeDictionaryEnumerator: cocoa.classes.NSSimpleAttributeDictionaryEnumerator;
