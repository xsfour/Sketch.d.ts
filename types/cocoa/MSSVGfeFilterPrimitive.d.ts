/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGfeFilterPrimitive<T = any> extends MSXMLElementWrapper {
    result<R = NSString>(): R;
    setResult<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGfeFilterPrimitive<T = any> extends MSXMLElementWrapper {
      alloc<R = MSSVGfeFilterPrimitive>(): R;
      new: <R = MSSVGfeFilterPrimitive>() => R;
      filter<R = unknown>(): R;
    }
  }
}

declare const MSSVGfeFilterPrimitive: cocoa.classes.MSSVGfeFilterPrimitive;
