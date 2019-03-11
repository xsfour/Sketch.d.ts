/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGImageWrapper<T = any> extends cocoa.MSXMLElementWrapper {
    externalResourcesRequired<R = cocoa.NSString>(): R;
    setExternalResourcesRequired<R = void, P0 = cocoa.NSString>(_v: P0): R;
    height<R = cocoa.NSString>(): R;
    setHeight<R = void, P0 = cocoa.NSString>(_v: P0): R;
    href<R = cocoa.NSString>(): R;
    setHref<R = void, P0 = cocoa.NSString>(_v: P0): R;
    preserveAspectRatio<R = cocoa.NSString>(): R;
    setPreserveAspectRatio<R = void, P0 = cocoa.NSString>(_v: P0): R;
    transform<R = cocoa.NSString>(): R;
    setTransform<R = void, P0 = cocoa.NSString>(_v: P0): R;
    width<R = cocoa.NSString>(): R;
    setWidth<R = void, P0 = cocoa.NSString>(_v: P0): R;
    x<R = cocoa.NSString>(): R;
    setX<R = void, P0 = cocoa.NSString>(_v: P0): R;
    y<R = cocoa.NSString>(): R;
    setY<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGImageWrapper<T = any> extends cocoa.classes.MSXMLElementWrapper {
      alloc<R = MSSVGImageWrapper>(): R;
      new: <R = MSSVGImageWrapper>() => R;
    }
  }
}

declare const MSSVGImageWrapper: cocoa.classes.MSSVGImageWrapper;
