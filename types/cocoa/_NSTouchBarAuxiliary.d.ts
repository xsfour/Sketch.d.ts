/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarAuxiliary<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface _NSTouchBarAuxiliary<T = any> extends NSObject {
      alloc<R = _NSTouchBarAuxiliary>(): R;
      new: <R = _NSTouchBarAuxiliary>() => R;
    }
  }
}
