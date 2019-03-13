/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeleteCommand<T = any> extends NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = NSScriptObjectSpecifier>(): R;
  }
  namespace classes {
    export interface NSDeleteCommand<T = any> extends NSScriptCommand {
      alloc<R = NSDeleteCommand>(): R;
      new: <R = NSDeleteCommand>() => R;
    }
  }
}

declare const NSDeleteCommand: cocoa.classes.NSDeleteCommand;
