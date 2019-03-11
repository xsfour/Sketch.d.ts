/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetCommand<T = any> extends cocoa.NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = cocoa.NSScriptObjectSpecifier>(): R;
  }
  namespace classes {
    export interface NSSetCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSSetCommand>(): R;
      new: <R = NSSetCommand>() => R;
    }
  }
}

declare const NSSetCommand: cocoa.classes.NSSetCommand;
