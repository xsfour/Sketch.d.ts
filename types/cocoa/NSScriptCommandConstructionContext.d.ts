/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCommandConstructionContext<T = any> extends NSObject {}
  namespace classes {
    export interface NSScriptCommandConstructionContext<T = any> extends NSObject {
      alloc<R = NSScriptCommandConstructionContext>(): R;
      new: <R = NSScriptCommandConstructionContext>() => R;
      currentConstructionContext<R = unknown>(): R;
      setCurrentConstructionContext<R = void, P0 = unknown>(_setCurrentConstructionContext: P0): R;
      endConstruction<R = void>(): R;
      beginConstructionWithSuiteRegistry<R = void, P0 = unknown>(_beginConstructionWithSuiteRegistry: P0): R;
    }
  }
}

declare const NSScriptCommandConstructionContext: cocoa.classes.NSScriptCommandConstructionContext;
