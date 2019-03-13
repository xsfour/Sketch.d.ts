/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIndexSetEnumerator<T = any> extends NSEnumerator {
    nextObject<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIndexSet<R = unknown, P0 = unknown>(_initWithIndexSet: P0): R;
  }
  namespace classes {
    export interface _NSIndexSetEnumerator<T = any> extends NSEnumerator {  }
  }
}
