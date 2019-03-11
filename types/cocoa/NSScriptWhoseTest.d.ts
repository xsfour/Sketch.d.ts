/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptWhoseTest<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    isTrue<R = boolean>(): R;
  }
  namespace classes {
    export interface NSScriptWhoseTest<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSScriptWhoseTest>(): R;
      new: <R = NSScriptWhoseTest>() => R;
    }
  }
}

declare const NSScriptWhoseTest: cocoa.classes.NSScriptWhoseTest;
