/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGOffset<T = any> extends MSSVGfeFilterPrimitive {
    dx<R = number>(): R;
    setDx<R = void, P0 = number>(_v: P0): R;
    dy<R = number>(): R;
    setDy<R = void, P0 = number>(_v: P0): R;
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGOffset<T = any> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGOffset>(): R;
      new: <R = MSSVGOffset>() => R;
    }
  }
}

declare const MSSVGOffset: cocoa.classes.MSSVGOffset;
