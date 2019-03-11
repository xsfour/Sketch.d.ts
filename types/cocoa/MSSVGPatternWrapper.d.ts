/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGPatternWrapper<T = any> extends cocoa.MSXMLElementWrapper {
    height<R = cocoa.NSString>(): R;
    setHeight<R = void, P0 = cocoa.NSString>(_v: P0): R;
    href<R = cocoa.NSString>(): R;
    setHref<R = void, P0 = cocoa.NSString>(_v: P0): R;
    patternContentUnits<R = cocoa.NSString>(): R;
    setPatternContentUnits<R = void, P0 = cocoa.NSString>(_v: P0): R;
    patternTransform<R = cocoa.NSString>(): R;
    setPatternTransform<R = void, P0 = cocoa.NSString>(_v: P0): R;
    patternUnits<R = cocoa.NSString>(): R;
    setPatternUnits<R = void, P0 = cocoa.NSString>(_v: P0): R;
    preserveAspectRatio<R = cocoa.NSString>(): R;
    setPreserveAspectRatio<R = void, P0 = cocoa.NSString>(_v: P0): R;
    width<R = cocoa.NSString>(): R;
    setWidth<R = void, P0 = cocoa.NSString>(_v: P0): R;
    x<R = cocoa.NSString>(): R;
    setX<R = void, P0 = cocoa.NSString>(_v: P0): R;
    y<R = cocoa.NSString>(): R;
    setY<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGPatternWrapper<T = any> extends cocoa.classes.MSXMLElementWrapper {
      alloc<R = MSSVGPatternWrapper>(): R;
      new: <R = MSSVGPatternWrapper>() => R;
    }
  }
}

declare const MSSVGPatternWrapper: cocoa.classes.MSSVGPatternWrapper;
