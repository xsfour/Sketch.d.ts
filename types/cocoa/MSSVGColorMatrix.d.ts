/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGColorMatrix<T = any> extends MSSVGfeFilterPrimitive {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
    type<R = NSString>(): R;
    setType<R = void, P0 = NSString>(_v: P0): R;
    values<R = NSString>(): R;
    setValues<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGColorMatrix<T = any> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGColorMatrix>(): R;
      new: <R = MSSVGColorMatrix>() => R;
      colorMatrixForColor<R = unknown, P0 = unknown>(_colorMatrixForColor: P0): R;
    }
  }
}

declare const MSSVGColorMatrix: cocoa.classes.MSSVGColorMatrix;
