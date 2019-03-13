/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGMorphology<T = any> extends MSSVGfeFilterPrimitive {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
    operator<R = NSString>(): R;
    setOperator<R = void, P0 = NSString>(_v: P0): R;
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGMorphology<T = any> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGMorphology>(): R;
      new: <R = MSSVGMorphology>() => R;
    }
  }
}

declare const MSSVGMorphology: cocoa.classes.MSSVGMorphology;
