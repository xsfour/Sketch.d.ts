/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGfeFilterPrimitive<T = any> extends cocoa.MSXMLElementWrapper {
    result<R = cocoa.NSString>(): R;
    setResult<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGfeFilterPrimitive<T = any> extends cocoa.classes.MSXMLElementWrapper {
      alloc<R = MSSVGfeFilterPrimitive>(): R;
      new: <R = MSSVGfeFilterPrimitive>() => R;
      filter<R = unknown>(): R;
    }
  }
}

declare const MSSVGfeFilterPrimitive: cocoa.classes.MSSVGfeFilterPrimitive;
