/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathControlAuxiliary<T = any> extends NSObject {
    dealloc<R = void>(): R;
    dropOperation<R = number>(): R;
    setDropOperation<R = void, P0 = number>(_v: P0): R;
    dropCell<R = NSPathComponentCell>(): R;
    setDropCell<R = void, P0 = NSPathComponentCell>(_v: P0): R;
  }
  namespace classes {
    export interface NSPathControlAuxiliary<T = any> extends NSObject {
      alloc<R = NSPathControlAuxiliary>(): R;
      new: <R = NSPathControlAuxiliary>() => R;
    }
  }
}

declare const NSPathControlAuxiliary: cocoa.classes.NSPathControlAuxiliary;
