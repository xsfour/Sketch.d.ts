/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGColorMatrix<T = any> extends cocoa.MSSVGfeFilterPrimitive {
    in<R = cocoa.NSString>(): R;
    setIn<R = void, P0 = cocoa.NSString>(_v: P0): R;
    type<R = cocoa.NSString>(): R;
    setType<R = void, P0 = cocoa.NSString>(_v: P0): R;
    values<R = cocoa.NSString>(): R;
    setValues<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGColorMatrix<T = any> extends cocoa.classes.MSSVGfeFilterPrimitive {
      alloc<R = MSSVGColorMatrix>(): R;
      new: <R = MSSVGColorMatrix>() => R;
      colorMatrixForColor<R = unknown, P0 = unknown>(_colorMatrixForColor: P0): R;
    }
  }
}

declare const MSSVGColorMatrix: cocoa.classes.MSSVGColorMatrix;
