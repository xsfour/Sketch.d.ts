/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePortCoder<T = any> extends cocoa.NSPortCoder {
    dealloc<R = void>(): R;
    _classAllowed<R = boolean, P0 = unknown>(__classAllowed: P0): R;
    _setWhitelist<R = void, P0 = unknown>(__setWhitelist: P0): R;
  }
  namespace classes {
    export interface NSConcretePortCoder<T = any> extends cocoa.classes.NSPortCoder {
      alloc<R = NSConcretePortCoder>(): R;
      new: <R = NSConcretePortCoder>() => R;
    }
  }
}

declare const NSConcretePortCoder: cocoa.classes.NSConcretePortCoder;
