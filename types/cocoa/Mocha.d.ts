/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface Mocha<T = any> extends cocoa.NSObject {
    evalString<R = unknown, P0 = cocoa.NSString>(_evalString: P0): R;
    callFunctionWithName<R = unknown, P0 = cocoa.NSString>(_callFunctionWithName: P0): R;
    callFunctionWithName_withArguments<R = unknown, P0 = cocoa.NSString, P1 = unknown>(_callFunctionWithName: P0, _withArguments: P1): R;
    callFunctionWithName_withArgumentsInArray<R = unknown, P0 = cocoa.NSString, P1 = cocoa.NSArray>(_callFunctionWithName: P0, _withArgumentsInArray: P1): R;
    isSyntaxValidForString<R = boolean, P0 = cocoa.NSString>(_isSyntaxValidForString: P0): R;
    loadFrameworkWithName<R = boolean, P0 = cocoa.NSString>(_loadFrameworkWithName: P0): R;
    loadFrameworkWithName_inDirectory<R = boolean, P0 = cocoa.NSString, P1 = cocoa.NSString>(_loadFrameworkWithName: P0, _inDirectory: P1): R;
    loadBridgeSupportFilesAtPath<R = boolean, P0 = cocoa.NSString>(_loadBridgeSupportFilesAtPath: P0): R;
    addFrameworkSearchPath<R = void, P0 = cocoa.NSString>(_addFrameworkSearchPath: P0): R;
    insertFrameworkSearchPath_atIndex<R = void, P0 = cocoa.NSString, P1 = cocoa.NSUInteger>(_insertFrameworkSearchPath: P0, _atIndex: P1): R;
    removeFrameworkSearchPathAtIndex<R = void, P0 = cocoa.NSUInteger>(_removeFrameworkSearchPathAtIndex: P0): R;
    garbageCollect<R = void>(): R;
    delegate<R = cocoa.MochaDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MochaDelegate>(_v: P0): R;
    frameworkSearchPaths<R = cocoa.NSArray>(): R;
    setFrameworkSearchPaths<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    globalSymbolNames<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface Mocha<T = any> extends cocoa.classes.NSObject {
      alloc<R = Mocha>(): R;
      new: <R = Mocha>() => R;
      sharedRuntime<R = cocoa.Mocha>(): R;
    }
  }
}

declare const Mocha: cocoa.classes.Mocha;
