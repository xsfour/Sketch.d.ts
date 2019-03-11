/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPathScanner<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    nextFloat<R = number>(): R;
    nextCommand<R = boolean>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    commandPosition<R = number>(): R;
    setCommandPosition<R = void, P0 = number>(_v: P0): R;
    commandBuffer<R = cocoa.NSString>(): R;
    setCommandBuffer<R = void, P0 = cocoa.NSString>(_v: P0): R;
    number<R = cocoa.NSCharacterSet>(): R;
    setNumber<R = void, P0 = cocoa.NSCharacterSet>(_v: P0): R;
    scanner<R = cocoa.NSScanner>(): R;
    setScanner<R = void, P0 = cocoa.NSScanner>(_v: P0): R;
  }
  namespace classes {
    export interface SVGPathScanner<T = any> extends cocoa.classes.NSObject {
      alloc<R = SVGPathScanner>(): R;
      new: <R = SVGPathScanner>() => R;
    }
  }
}

declare const SVGPathScanner: cocoa.classes.SVGPathScanner;
