/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProtocolChecker<T = any> extends NSProxy {
    initWithTarget_protocol<R = unknown, P0 = unknown, P1 = unknown>(_initWithTarget: P0, _protocol: P1): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    _localClassNameForClass<R = string>(): R;
    target<R = NSObject>(): R;
    protocol<R = Protocol>(): R;
  }
  namespace classes {
    export interface NSProtocolChecker<T = any> extends NSProxy {
      protocolCheckerWithTarget_protocol<R = unknown, P0 = unknown, P1 = unknown>(_protocolCheckerWithTarget: P0, _protocol: P1): R;
    }
  }
}

declare const NSProtocolChecker: cocoa.classes.NSProtocolChecker;
