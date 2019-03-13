/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayLinkInvocation<T = any> extends NSDisplayLinkInvocation {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
    initWithTimestamp_duration<R = unknown, P0 = number, P1 = number>(_initWithTimestamp: P0, _duration: P1): R;
  }
  namespace classes {
    export interface _NSDisplayLinkInvocation<T = any> extends NSDisplayLinkInvocation {
      alloc<R = _NSDisplayLinkInvocation>(): R;
      new: <R = _NSDisplayLinkInvocation>() => R;
    }
  }
}
