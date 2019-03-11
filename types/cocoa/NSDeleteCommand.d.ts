/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeleteCommand<T = any> extends cocoa.NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = cocoa.NSScriptObjectSpecifier>(): R;
  }
  namespace classes {
    export interface NSDeleteCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSDeleteCommand>(): R;
      new: <R = NSDeleteCommand>() => R;
    }
  }
}

declare const NSDeleteCommand: cocoa.classes.NSDeleteCommand;
