/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMoveCommand<T = any> extends cocoa.NSScriptCommand {
    _moveObjectsInContainer_toContainer_withKey_atIndex_replace<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = boolean>(__moveObjectsInContainer: P0, _toContainer: P1, _withKey: P2, _atIndex: P3, _replace: P4): R;
    _moveObjectInContainer_withKey_atIndex_toContainer_withKey_atIndex_replace<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = number, P6 = boolean>(__moveObjectInContainer: P0, _withKey: P1, _atIndex: P2, _toContainer: P3, _withKey1: P4, _atIndex1: P5, _replace: P6): R;
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = cocoa.NSScriptObjectSpecifier>(): R;
  }
  namespace classes {
    export interface NSMoveCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSMoveCommand>(): R;
      new: <R = NSMoveCommand>() => R;
    }
  }
}

declare const NSMoveCommand: cocoa.classes.NSMoveCommand;
