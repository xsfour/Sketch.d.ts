/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitleBinder<T = any> extends NSBinder {}
  namespace classes {
    export interface NSTitleBinder<T = any> extends NSBinder {
      alloc<R = NSTitleBinder>(): R;
      new: <R = NSTitleBinder>() => R;
    }
  }
}

declare const NSTitleBinder: cocoa.classes.NSTitleBinder;
