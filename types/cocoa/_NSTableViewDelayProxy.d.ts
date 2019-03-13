/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableViewDelayProxy<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface _NSTableViewDelayProxy<T = any> extends NSObject {
      alloc<R = _NSTableViewDelayProxy>(): R;
      new: <R = _NSTableViewDelayProxy>() => R;
      proxy<R = unknown>(): R;
    }
  }
}
