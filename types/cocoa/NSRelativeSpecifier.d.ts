/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRelativeSpecifier<T = any> extends cocoa.NSScriptObjectSpecifier {
    initWithContainerClassDescription_containerSpecifier_key_relativePosition_baseSpecifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2, _relativePosition: P3, _baseSpecifier: P4): R;
    relativePosition<R = number>(): R;
    setRelativePosition<R = void, P0 = number>(_v: P0): R;
    baseSpecifier<R = cocoa.NSScriptObjectSpecifier>(): R;
    setBaseSpecifier<R = void, P0 = cocoa.NSScriptObjectSpecifier>(_v: P0): R;
  }
  namespace classes {
    export interface NSRelativeSpecifier<T = any> extends cocoa.classes.NSScriptObjectSpecifier {
      alloc<R = NSRelativeSpecifier>(): R;
      new: <R = NSRelativeSpecifier>() => R;
    }
  }
}

declare const NSRelativeSpecifier: cocoa.classes.NSRelativeSpecifier;
