/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptWhoseTest<T = any> extends NSObject, NSCodingProtocol {
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    isTrue<R = boolean>(): R;
  }
  namespace classes {
    export interface NSScriptWhoseTest<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = NSScriptWhoseTest>(): R;
      new: <R = NSScriptWhoseTest>() => R;
    }
  }
}

declare const NSScriptWhoseTest: cocoa.classes.NSScriptWhoseTest;
