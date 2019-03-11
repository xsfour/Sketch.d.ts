/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridRendererCG<T = any> extends cocoa.NSObject, cocoa.MSGridRendererProtocol {
    dealloc<R = void>(): R;
    initWithLightColor_darkColor<R = unknown, P0 = cocoa.CGColor, P1 = cocoa.CGColor>(_initWithLightColor: P0, _darkColor: P1): R;
    darkColor<R = cocoa.CGColor>(): R;
    lightColor<R = cocoa.CGColor>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGridRendererCG<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSGridRendererProtocol {
      alloc<R = MSGridRendererCG>(): R;
      new: <R = MSGridRendererCG>() => R;
    }
  }
}

declare const MSGridRendererCG: cocoa.classes.MSGridRendererCG;
