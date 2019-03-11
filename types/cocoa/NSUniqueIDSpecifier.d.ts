/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUniqueIDSpecifier<T = any> extends cocoa.NSScriptObjectSpecifier {
    initWithContainerClassDescription_containerSpecifier_key_uniqueID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2, _uniqueID: P3): R;
    uniqueID<R = unknown>(): R;
    setUniqueID<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSUniqueIDSpecifier<T = any> extends cocoa.classes.NSScriptObjectSpecifier {
      alloc<R = NSUniqueIDSpecifier>(): R;
      new: <R = NSUniqueIDSpecifier>() => R;
    }
  }
}

declare const NSUniqueIDSpecifier: cocoa.classes.NSUniqueIDSpecifier;
