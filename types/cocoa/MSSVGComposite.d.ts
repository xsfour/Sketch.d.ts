/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGComposite<T = any> extends cocoa.MSSVGfeFilterPrimitive {
    in<R = cocoa.NSString>(): R;
    setIn<R = void, P0 = cocoa.NSString>(_v: P0): R;
    in2<R = cocoa.NSString>(): R;
    setIn2<R = void, P0 = cocoa.NSString>(_v: P0): R;
    k1<R = number>(): R;
    setK1<R = void, P0 = number>(_v: P0): R;
    k2<R = number>(): R;
    setK2<R = void, P0 = number>(_v: P0): R;
    k3<R = number>(): R;
    setK3<R = void, P0 = number>(_v: P0): R;
    k4<R = number>(): R;
    setK4<R = void, P0 = number>(_v: P0): R;
    operator<R = cocoa.NSString>(): R;
    setOperator<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGComposite<T = any> extends cocoa.classes.MSSVGfeFilterPrimitive {
      alloc<R = MSSVGComposite>(): R;
      new: <R = MSSVGComposite>() => R;
    }
  }
}

declare const MSSVGComposite: cocoa.classes.MSSVGComposite;
