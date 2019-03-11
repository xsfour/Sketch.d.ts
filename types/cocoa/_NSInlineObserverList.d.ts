/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInlineObserverList<T = any> extends cocoa._NSObserverList {}
  namespace classes {
    export interface _NSInlineObserverList<T = any> extends cocoa.classes._NSObserverList {
      alloc<R = _NSInlineObserverList>(): R;
      new: <R = _NSInlineObserverList>() => R;
    }
  }
}
