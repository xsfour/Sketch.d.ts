/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMagnifierWindow<T = any> extends NSWindow {}
  namespace classes {
    export interface _NSMagnifierWindow<T = any> extends NSWindow {
      alloc<R = _NSMagnifierWindow>(): R;
      new: <R = _NSMagnifierWindow>() => R;
    }
  }
}
