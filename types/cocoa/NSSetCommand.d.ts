/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetCommand<T = any> extends NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = NSScriptObjectSpecifier>(): R;
  }
  namespace classes {
    export interface NSSetCommand<T = any> extends NSScriptCommand {
      alloc<R = NSSetCommand>(): R;
      new: <R = NSSetCommand>() => R;
    }
  }
}

declare const NSSetCommand: cocoa.classes.NSSetCommand;
