/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWhoseTest<T = any> extends cocoa.NSScriptWhoseTest {}
  namespace classes {
    export interface NSWhoseTest<T = any> extends cocoa.classes.NSScriptWhoseTest {
      alloc<R = NSWhoseTest>(): R;
      new: <R = NSWhoseTest>() => R;
    }
  }
}

declare const NSWhoseTest: cocoa.classes.NSWhoseTest;
