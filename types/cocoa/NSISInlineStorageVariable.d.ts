/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISInlineStorageVariable<T = any> extends cocoa.NSISVariable, cocoa.NSISVariableDelegateProtocol {
    valueIsUserObservable<R = boolean>(): R;
    setValueIsUserObservable<R = void, P0 = boolean>(_v: P0): R;
    shouldBeMinimized<R = boolean>(): R;
    setShouldBeMinimized<R = void, P0 = boolean>(_v: P0): R;
    valueRestriction<R = number>(): R;
    setValueRestriction<R = void, P0 = number>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSISInlineStorageVariable<T = any> extends cocoa.classes.NSISVariable, cocoa.classes.NSISVariableDelegateProtocol {
      alloc<R = NSISInlineStorageVariable>(): R;
      new: <R = NSISInlineStorageVariable>() => R;
    }
  }
}

declare const NSISInlineStorageVariable: cocoa.classes.NSISInlineStorageVariable;
