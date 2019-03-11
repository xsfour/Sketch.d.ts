/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGMorphology<T = any> extends cocoa.MSSVGfeFilterPrimitive {
    in<R = cocoa.NSString>(): R;
    setIn<R = void, P0 = cocoa.NSString>(_v: P0): R;
    operator<R = cocoa.NSString>(): R;
    setOperator<R = void, P0 = cocoa.NSString>(_v: P0): R;
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGMorphology<T = any> extends cocoa.classes.MSSVGfeFilterPrimitive {
      alloc<R = MSSVGMorphology>(): R;
      new: <R = MSSVGMorphology>() => R;
    }
  }
}

declare const MSSVGMorphology: cocoa.classes.MSSVGMorphology;
