/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPathScanner<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    nextFloat<R = number>(): R;
    nextCommand<R = boolean>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    commandPosition<R = number>(): R;
    setCommandPosition<R = void, P0 = number>(_v: P0): R;
    commandBuffer<R = NSString>(): R;
    setCommandBuffer<R = void, P0 = NSString>(_v: P0): R;
    number<R = NSCharacterSet>(): R;
    setNumber<R = void, P0 = NSCharacterSet>(_v: P0): R;
    scanner<R = NSScanner>(): R;
    setScanner<R = void, P0 = NSScanner>(_v: P0): R;
  }
  namespace classes {
    export interface SVGPathScanner<T = any> extends NSObject {
      alloc<R = SVGPathScanner>(): R;
      new: <R = SVGPathScanner>() => R;
    }
  }
}

declare const SVGPathScanner: cocoa.classes.SVGPathScanner;
