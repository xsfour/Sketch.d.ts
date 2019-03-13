/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyBindingStateActual<T = any> extends NSObject {}
  namespace classes {
    export interface _NSKeyBindingStateActual<T = any> extends NSObject {
      alloc<R = _NSKeyBindingStateActual>(): R;
      new: <R = _NSKeyBindingStateActual>() => R;
    }
  }
}
